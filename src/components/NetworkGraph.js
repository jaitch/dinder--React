import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import nodes from '../data/nodes';
import links from '../data/links';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import './NetworkGraph.css'


class NetworkGraph extends Component {
  constructor(props) {
    super();
    this.state = {
      nodes_data: nodes,
      links_data: links,
    }
  };


  componentDidMount() {
    this.d3Graph = d3.select(ReactDOM.findDOMNode(this.refs.graph));

    const simulation = d3.forceSimulation()
    .nodes(this.state.nodes_data);

    simulation
      .force("charge_force", d3.forceManyBody().strength(-900))
      .force("charge_force", d3.forceManyBody().distanceMin(500))
      .force("center_force", d3.forceCenter(900 / 2, 600 / 2))

    force.on('tick', () => {
      // after force calculation starts, call updateGraph
      // which uses d3 to manipulate the attributes,
      // and React doesn't have to go through lifecycle on each tick
      this.d3Graph.call(updateGraph);
    });

    this.drawGraph();
  }

  updateGraph (selection) {
    selection.selectAll('.node')
      .call(updateNode);
    selection.selectAll('.link')
      .call(updateLink);
  };

  drawGraph() {
    const svg = d3.select("body")
    .append("svg")
    .attr("width", 900)
    .attr("height", 600)
    .style("margin-left", 100);

    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.state.nodes_data)
      .enter()
      .append("circle")
      .attr("r", 30)
  //change this size r to closely match similarity number; use circle color to indicate searched-for ingredient (similarity of 1 or this.state)
      .attr("fill", 'red'); //change to function later

    const textElements = svg.append('g')
    .selectAll('text')
    .data(this.state.nodes_data)
    .enter().append('text')
      .text(node => node.name)
      .attr('font-size', 20)
      .attr('dx', 15)
      .attr('dy', 4)

    const link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(this.state.links_data)
    .enter().append("line")
      .attr("stroke-width", 2) //change to functionlater
      // .style("stroke", black);
      //  make line thicker (stroke-width) for stronger similarity
  }

  render(){
    // return <div id={"#" + this.props.id}></div>
    return <svg width={900} height={300}> <g ref='graph'/> </svg>
  }
}


//     const simulation = d3.forceSimulation()
//     .nodes(this.state.nodes_data);

//     simulation
//       .force("charge_force", d3.forceManyBody().strength(-900))
//       // .force("charge_force", d3.forceManyBody().distanceMin(500))
//       .force("center_force", d3.forceCenter(width / 2, height / 2))



//     simulation.on("tick", tickActions );

//     const link_force =  d3.forceLink(this.state.links_data)
//       .id(function(d) { return d.id; })

//     simulation.force("links",link_force)

//     const link = svg.append("g")
//         .attr("class", "links")
//       .selectAll("line")
//       .data(this.state.links_data)
//       .enter().append("line")
//         .attr("stroke-width", linkWidth)
//         // .style("stroke", black);
//         //  make line thicker (stroke-width) for stronger similarity

//     function circleColor(d){
//       console.log(d);
//         if(d.name.length <= 7){
//         return "#fd267d";
//       } else {
//         return "#ff7854";
//       }
//     }

//     function linkWidth(d) {
//       console.log(d);
//       if(d.strength >= 0.01) {
//         return "7";
//       } else {
//         return "2";
//       }
//     }

//     function tickActions() {
//       node
//         .attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; });
//       textElements
//         .attr("x", node => node.x)
//         .attr("y", node => node.y);
//       link
//         .attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; });
//     }
//   }

//   componentDidUpdate() {

//   }
//   render() {
//     return (
//       <svg >
//         <g ref='graph'/>
//       </svg>
//     );
//   }
// }


NetworkGraph.propTypes = {
  ingredient: PropTypes.number.isRequired,
}
export default NetworkGraph;

