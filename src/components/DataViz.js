import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import './DataViz.css'
class DataViz extends Component {
  constructor(props) {
    super();
    this.state = {
      soughtIngredient: '',
      error: '',
    }

    onInputChange = (event) => {
      console.log(this.state.query)
      this.setState({
        soughtIngredient: event.target.value,
      });
      console.log(`updated: ${this.state.query}`)
    }

    onSubmit = (event) => {
      event.preventDefault();
      axios.get(`${this.props.url}/ingredient/${this.state.query}`)
        .then((response) => {
          this.setState({soughtIngredient: response.data });
        })
        .catch((errors) => {
          this.setState({ error: errors.title });
          console.log(errors.title)
        });
        // If I have time: use Feedback to display 'No Search Results' message

        this.setState({
          query: '',
        });
      }
  }
}

DataViz.propTypes = {
  url: PropTypes.string.isRequired,
}
export default DataViz;