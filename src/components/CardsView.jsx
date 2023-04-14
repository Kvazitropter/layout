import React from 'react';
import ShopCard from './ShopCard.jsx';
import { uniqueId } from 'lodash';

const CardsView = (props) => {
  const { cards } = props;

  return (
    <div className='cards'>
      {cards.map((cardData) => (
        <ShopCard key={uniqueId()} data={cardData} />
      ))}
    </div>
  );
};

export default CardsView;
