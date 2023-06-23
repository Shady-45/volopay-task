import React from 'react'

import { cardData } from '../data/data';
const Categories = ({filteredCards}) => {
    const allCards = ['all', ...new Set(cardData.map((item)=>item.status))]
    return (
        <div className='buttons'>
          {allCards.map((category, index) => {
            return (
              <button key={index} onClick={() => filteredCards(category)}>
                {category}
              </button>
            );
          })}
        </div>
      );

}

export default Categories