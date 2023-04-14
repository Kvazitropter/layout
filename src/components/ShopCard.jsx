import React from 'react';

const ShopCard = (props) => {
  const { name, price, color, img } = props.data;

  return (
    <div className="card">
      <img className="img" src={img} alt='sneakers' />
      <h2 className="name">{name}</h2>
      <div className="color">{color}</div>
      <div className="rd price">${price}</div>
      <button className="rd btn">ADD TO CARD</button>
    </div>
  );
};

export default ShopCard;
