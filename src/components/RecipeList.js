import React from 'react';
import PropTypes from 'prop-types';
import './RecipeList.css'

function RecipeList(props) {
  const list = props.list
  const recipe_array = list["rec_data"].map(r => r["allData"])
  if (recipe_array !== []) {
    const recipe_list = recipe_array.map((rec) =>
      <li key={rec["_id"]}>
        <a href="{rec['url']}"> {rec["name"]} </a>
      </li>);

  return (
    <div>
      <h3 className='recipe-list-header'>RECIPES</h3>
      <ul className='recipe-list'>{recipe_list}</ul>
    </div>
  )}
}

RecipeList.propTypes = {
  // list: PropTypes
}

export default RecipeList