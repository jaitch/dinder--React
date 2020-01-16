import React from 'react';
import PropTypes from 'prop-types';

function RecipeSearch(props) {
  const ings = props.ings
  if (ings != []) {
    const listItems = ings.map((ing) =>
    <li>{ing}</li>);

    return(
      <div className='search-box'>
        <h3 className='instructions'>To matchmake another ingredient, click on the circle. To add an ingredient to the recipe search, click on the name.</h3>
          <ul>
            {listItems}
          </ul>
      </div>
    );
  }
}

RecipeSearch.propTypes = {
  ings: PropTypes.array
}

export default RecipeSearch