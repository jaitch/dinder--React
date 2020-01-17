import React from 'react';
import PropTypes from 'prop-types';
import './RecipeList.css'

function RecipeList(props) {

  const recipe_array = props.list["rec_data"].map(r => r["allData"])

  return (

    <div>{recipe_array[0].url}</div>

  )
}

RecipeList.propTypes = {
  // list: PropTypes
}

export default RecipeList