import React, { Component } from 'react';
import nodes from '../data/nodes';
import links from '../data/links';
import * as d3 from 'd3';
import PropTypes from 'prop-types';


class NetworkGraph extends Component {
  constructor(props) {
    super();
    this.state = {
      foundIngredient_id: '',
    }
  };



  componentDidMount() {

  }

  componentDidUpdate() {

  }
  render() {
    return (
      <g >
      </g>
    );
  }
}


NetworkGraph.propTypes = {
  ingredient: PropTypes.number.isRequired,
}
export default NetworkGraph;

