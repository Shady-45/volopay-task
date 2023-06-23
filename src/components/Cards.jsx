import React,{useState} from 'react'
import {cardData} from '../data/data.js'
import Categories from './Categories.jsx';
import Card from './Card.jsx';

const Cards = () => {
    const [card, setCard] = useState(cardData);
    
  
    const filteredCards = (category) => {
      if (category === "all") {
        setCard(cardData);
        return;
      }
      const newCards = cardData.filter((item) => item.status === category);
      setCard(newCards);
    }
  return (
    <>
    <Categories filteredCards={filteredCards} />
    <Card carditem={card} />
    </>
  )
}

export default Cards