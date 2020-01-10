import React, { Component } from 'react';



class NetworkGraph extends Component {
  constructor(props) {
    super();
    this.state = {
      soughtIngredient: '',
      foundIngredient_id: '',
      error: '',
    }
  }



}

NetworkGraph.propTypes = {
  ingredient: PropTypes.integer.isRequired,
}
export default NetworkGraph;

