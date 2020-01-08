import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './DataViz.css'
class DataViz extends Component {
  constructor(props) {
    super();
    this.state = {
      soughtIngredient: '',
      error: '',
    }
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

  render() {

    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="search-box">
            <label className="text" htmlFor="text">Start with an ingredient: </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="ingredient"
              name="ingredient"
              onChange={this.onInputChange}
              value={this.state.query}>
            </input>
          </div>

          <div>
            <input
              type="submit"
              value="Search"
              onClick={this.onSubmit} className="submit-btn heart"/>
          </div>
        </form>
      </div>
    )
  }
}

DataViz.propTypes = {
  url: PropTypes.string.isRequired,
}
export default DataViz;