import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import './NetworkGraph.css'
import nodes from '../data/nodes';
import links from '../data/links';


class NetworkGraph extends Component {

  componentDidMount() {
    // console.log(this.props.nodes)
    this.drawGraph(nodes, links);
  }

  drawGraph(nodes, links) {
    const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    const simulation = d3.forceSimulation()
    .nodes(nodes);

    simulation
      .force("charge_force", d3.forceManyBody().strength(-2000))
      .force("center_force", d3.forceCenter(width / 2, height / 2))

    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 40)
      .attr("fill", circleColor)
      .style("stroke", 'black')

    const textElements = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
        .text(node => node.name)
        .attr('font-size', 20)
        .attr('dx', 15)
        .attr('dy', 4)

    simulation.on("tick", tickActions );

    const link_force =  d3.forceLink(links)
      .id(function(d) { return d.id; })

    simulation.force("links",link_force)

    const link = svg.append("g")
        .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
        .attr("stroke-width", linkWidth)

    function circleColor(d){
      console.log(d);
        if(d.name.length <= 7){
        return "#fd267d";
      } else {
        return "#ff7854";
      }
    }

  // function circleSize(d){

  // }

    function linkWidth(d) {
      console.log(d);
      if(d.strength >= 0.01) {
        return "7";
      } else {
        return "2";
      }
    }

    function tickActions() {
      node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
      textElements
        .attr("x", node => node.x)
        .attr("y", node => node.y);
      link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    }
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <svg width="1000" height="600">
        <g ref='graph'/>
      </svg>
    );
  }
}


NetworkGraph.propTypes = {
  ingredient:PropTypes.string.isRequired,
  // nodes:
  // links:
}
export default NetworkGraph;

// based on source: https://tomroth.com.au/fdg-basics/