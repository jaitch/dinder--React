import React from 'react';
import PropTypes from 'prop-types';
import './RecipeList.css'

function RecipeList(props) {
  const list = props.list
  const recipe_array = list["rec_data"].map(r => r["allData"])
  if (recipe_array !== []) {
    const recipe_list = recipe_array.map((rec) =>
      <li key={rec["_id"]}>{rec["name"]}</li>);

  return (
    <ul className='recipe-list'>{recipe_list}</ul>
  )
}
}

RecipeList.propTypes = {
  // list: PropTypes
}

export default RecipeList