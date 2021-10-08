import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import { feature } from "topojson-client";
import { mesh } from 'topojson-client';
import NavigationBar from '../component/NavigationBar';  
import FooterComponent from '../component/FooterComponent';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

function MapPage() {
  const svgRef = useRef()
  useEffect(() => {
    const width = 975;
    const height = 610;

    const svg = d3.select(svgRef.current)
    .attr("viewBox", [0, 0, width, height])
    .attr("class", "svg")
    .on("click", reset);
    
    const path = d3.geoPath();
    const g = svg.append('g');
    
    var states = null
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

    d3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json')
        .then(us => {
            states = g.append("g")
            .attr("fill", "#444")
            .attr("cursor", "pointer")
            .selectAll("path")
            .data(feature(us, us.objects.states).features)
            .join("path")
            .on("click", clicked)
            .attr("d", path);

            states.append("title")
            .text(d => d.properties.name);
      
            g.append("path")
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-linejoin", "round")
            .attr("d", path(mesh(us, us.objects.states, (a, b) => a !== b)));
    });

    svg.call(zoom);

    function reset() {
      states.transition().style("fill", null);
      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity,
        d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
      );
    }
  
    function clicked(event, d) {
      const [[x0, y0], [x1, y1]] = path.bounds(d);
      event.stopPropagation();
      states.transition().style("fill", null);
      d3.select(this).transition().style("fill", "red");
      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity
          .translate(width / 2, height / 2)
          .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
          .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
        d3.pointer(event, svg.node())
      );
    }
  
    function zoomed(event) {
      const {transform} = event;
      g.attr("transform", transform);
      g.attr("stroke-width", 1 / transform.k);
    }
  }, [])
  
  
  return (
    <Layout>
        <NavigationBar/>
        <Content>
            <div className = "Map">
                <svg ref = {svgRef}></svg>
            </div>
        </Content>
        <FooterComponent/>
    </Layout>
    
  );
}

export default MapPage;
