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
    const width = 970;
    const height = 610;

    const svg = d3.select(svgRef.current)
    .attr("viewBox", [0, 0, width, height])
    .attr("class", "svg")
    //.on("click", reset);
    
    const projection = d3.geoAlbersUsa().scale(800);
    const path = d3.geoPath(projection);
    const g = svg.append('g')
    
    var states = null
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

    d3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
        .then(us => {
            states = g.append("g")
            .attr("fill", "#444")
            .attr("cursor", "pointer")
            .selectAll("path")
            .data(feature(us, us.objects.states).features)
            .join("path")
            //.on("click", clicked)
            .attr("d", path);

            states.append("title")
            .text(d => d.properties.name);
      
            g.append("path")
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-linejoin", "round")
            .attr("d", path(mesh(us, us.objects.states, (a, b) => a !== b)));

            g.attr("transform", "translate(-80,0)")
            .attr("scale", 0.25) //useless
    });

    // d3.json('newstorelocations.json', function (locations){
    //   console.log('stores', locations);
    //   console.log('stores');

    //   svg.selectAll('circle')
    //           .data(locations)
    //           .enter()
    //           .append('circle')
    //           .attr('cx', function(d) {return d.lon})
    //           .attr('cy', function(d) {return d.lat})
    //           .attr('r', 4)
    //          .on("mouseover", function(b){
    //              console.log("binish", b)
    //              d3.select(this).style("fill", "red").append('text')
    //              .text("hi");
    //          })
    //          .on("mouseout", function(){d3.select(this).style("fill", "blue");
    //          });

    // });
    
    // geo data of each state https://gist.github.com/meiqimichelle/7727723 
    var marks = [{long: -85, lat: 42},{long: -86, lat: 38},{long: -90, lat: 33},
      {long: -107, lat: 31}, {long: -126, lat: 35}];
    
    svg.selectAll("circle")
    .data(marks)
    .enter()
    .append("circle")   
    .attr('cx', function(d) {return projection([d.long,d.lat])[0]})
    .attr('cy', function(d) {return projection([d.long,d.lat])[1]})
    .attr('r','6px')
    .style('fill', 'red')
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut);

    // svg.selectAll(".mark")
    // .data(marks)
    // .enter()
    // .append("image")
    // .attr('class','mark')
    // .attr("xlink:href",'http://www.simpleimageresizer.com/_uploads/photos/c4ed8860/pngwing.com_2_5.png')
    // .attr("transform", function(d) {return "translate(" + projection([d.long,d.lat]) + ")";})
    // .on("mouseover", function(b){
    //     console.log("pin mouseover")
    //     g.append('text').text("hi")
    // })
    //.on("mouseover", function(){d3.select(this).append("text").text("2021-03-25");});
    
    // svg
    // .call(zoom);

    function handleMouseOver(d, i) { 
      d3.select(this).attr('r','12px')
      .style('fill', 'orange')

      svg.append("text")
      .attr("id", "t" + d.x + "-" + d.y)
      .attr("x", d.x - 1)
      .attr("y", d.y-1)
      .text(function() {
        return "2021";  // Value of the text
      });
    }

    function handleMouseOut(d, i) {
      // Use D3 to select element, change color back to normal
      d3.select(this).attr('r','6px')
      .style('fill', 'red')

      // Select text by id and then remove
      // var curr = d3.select("#t" + d.x + "-" + d.y)
      // curr.remove(); 
      d3.selectAll("text").remove();
    }

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
      d3.select(this).transition().style("fill", "#0d2e16");
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
