import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NetworkGraph from './NetworkGraph'
import './DataViz.css'


class DataViz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soughtIngredient_name: '',
      graph_data: [],
      ing_found: false,
      error: '',
    }
  }

  componentDidMount() {
    // axios.get(`${this.props.url}/json/nodes.json`)
    // .then((response) => {
    //   this.setState({nodes_data: response.data });
    //   console.log(this.state.nodes_data)
    // })
    // .catch((error) => {
    //   this.setState({ error: error });
    //   console.log(error)
    // });

    // axios.get(`${this.props.url}/json/links.json`)
    // .then((response) => {
    //   this.setState({links_data: response.data });
    //   console.log(this.state.links_data)
    // })
    // .catch((error) => {
    //   this.setState({ error: error });
    //   console.log(error)
    // })
  }

  onInputChange = (event) => {
    this.setState({
      soughtIngredient_name: event.target.value,
    });
    console.log(`updated! looking for: ${this.state.soughtIngredient_name}`)
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios.get(`${this.props.url}/ingredient/${this.state.soughtIngredient_name}`)
      .then((response) => {
        console.log(response.data)
        // format for calling single ingredient: response.data.ing_data[0]
        this.setState({
          graphData: response.data,
          ing_found: true,
          soughtIngredient_name: '',
        });
      })
      .catch((errors) => {
        this.setState({
          ing_found: false,
          error: errors.title,
        });
        console.log(`errors: ${errors}`)
      });
      // If I have time: use Feedback to display 'No Search Results' message
  }

  findNewSimilarities = (ingredient) => {
    axios.get(`${this.props.url}/ingredient/${ingredient}`)
    .then((response) => {
      console.log(response.data)
      this.setState({
        graphData: response.data,
        ing_found: true,
        soughtIngredient_name: '',
      });
    })
    .catch((errors) => {
      this.setState({
        ing_found: false,
        error: errors.title,
      });
      console.log(`errors: ${errors}`)
    });
  }



  render() {

    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="search-area">
            <label className="text" htmlFor="text">What's Cookin'?</label>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="ingredient (singular)"
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
        {this.state.ing_found === true &&
        <NetworkGraph data={this.state.graphData} findNewSimilaritiesCallback={this.findNewSimilarities}/>
        }
      </div>
    </div>
    )
  }
}

DataViz.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DataViz;