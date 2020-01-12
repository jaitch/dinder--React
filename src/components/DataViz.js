import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NetworkGraph from './NetworkGraph'
import './DataViz.css'


class DataViz extends Component {
  constructor(props) {
    super();
    this.state = {
      soughtIngredient: '',
      foundIngredient_id: '',
      error: '',
    }
  }

  onInputChange = (event) => {
    console.log(`former sought ingredient space: ${this.state.soughtIngredient}`)
    this.setState({
      soughtIngredient: event.target.value,
    });
    console.log(`updated: ${this.state.soughtIngredient}`)
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios.get(`${this.props.url}/ingredient/${this.state.soughtIngredient}`)
      .then((response) => {
        console.log(response.data)
        const ingredient = response.data.data[0]
        console.log(`ingredient_id: ${ingredient.id}`)
        this.setState({foundIngredient_id: ingredient.id });
      })
      .catch((errors) => {
        this.setState({ error: errors.title });
        console.log(errors.title)
      });
      // If I have time: use Feedback to display 'No Search Results' message

      this.setState({
        soughtIngredient: '',
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
              value={this.state.soughtIngredient}>
            </input>
          </div>

          <div>
            <input
              type="submit"
              value="Search"
              onClick={this.onSubmit} className="submit-btn"/>
          </div>
        </form>
      <div>
        <NetworkGraph ingredient={this.state.foundIngredient_id} url={this.props.url}/>
      </div>
    </div>
    )
  }
}

DataViz.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DataViz;