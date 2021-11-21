import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import { feature } from "topojson-client";
import { mesh } from 'topojson-client';
import NavigationBar from '../component/NavigationBar';  
import FooterComponent from '../component/FooterComponent';
import { projectFirestore } from "../firebase/config";
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

    // geo data of each state https://gist.github.com/meiqimichelle/7727723
    var data = require('../assets/LatAndLongInUse.json');
    //console.log(data["ALASKA"]);

    var documents = [];
    projectFirestore.collection("map").onSnapshot((snap) => {
      snap.forEach((doc) => {
        documents.push(doc.data());
      })
    
      var marks = []
      documents.forEach(element => {
        
        let location = element.location;
        let stateInfo = data[location];
        let dateObj = new Date(element.date)
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        let newdate = year + "/" + month + "/" + day;
        let curr = {
          long: stateInfo.longitude - 9,
          lat: stateInfo.latitude,
          loc: location,
          programName: element.title,
          date: newdate,
          description: element.description,
          text: "Loc: " + location +  "\nProgram: " + element.title + 
          "\nDate: " + newdate
        }
        marks.push(curr)
      });
    
      svg.selectAll("circle")
      .data(marks)
      .enter()
      .append("circle")   
      .attr('cx', function(d) {return projection([d.long,d.lat])[0]})
      .attr('cy', function(d) {return projection([d.long,d.lat])[1]})
      .attr('r','6px')
      .style('fill', 'red')
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .on("click", handleMouseClick)
    });

    function handleMouseClick(i, d) {
      const dummyText = "[Location]\nProgramName: " + d.programName + " Date: " + d.date + 
                        "\nDescription: " + d.description 
      const detailsArr = dummyText.split("\n")
      const fountSize = [30, 18, 12, 12, 12, 12, 12]
      for (let i = 0; i < detailsArr.length; i++) {
        svg.append("text")
        .attr("x", 120)
        .attr("y", 480+25*i)
        .attr("width", 800)
        .attr("font-family", "sans-serif")
        .attr("font-size", fountSize[i] + "px")
        .attr("fill", "black")
        .text(detailsArr[i]);
      }
    }

    function handleMouseOver(d, i) { 
      d3.select(this).attr('r','12px')
      .style('fill', 'orange')

      const x = projection([i.long, i.lat])[0]
      const y = projection([i.long, i.lat])[1]

      svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', 115)
      .attr('height', 50)
      .attr('stroke', 'black')
      .attr('fill', 'white');

      const lineArr = i.text.split("\n")
      for (let i = 0; i < lineArr.length; i++) {
        svg.append("text")
        .attr("x", x+5)
        .attr("y", y+15+i*15)
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "black")
        .text(lineArr[i]);
      }
    }

    function handleMouseOut(d, i) {
      d3.select(this).attr('r','6px')
      .style('fill', 'red')

      d3.selectAll("text").remove();
      d3.selectAll("rect").remove();
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
            <div id="mapHeader">
              <h1>Map Of Our Involvements</h1>
            </div>
            <div className = "Map">
                <svg ref = {svgRef}></svg>
            </div>
        </Content>
        <FooterComponent/>
    </Layout>
    
  );
}

export default MapPage;
