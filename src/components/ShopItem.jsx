import React from 'react';

const ShopItem = (props) => {
  const { name, price, color, img } = props.data;

  return (
    <div className="item">
      <img className="img" src={img} alt='sneakers' />
      <h2 className="name">{name}</h2>
      <div className="color">{color}</div>
      <div className="rd price">${price}</div>
      <button className="rd btn">ADD TO CARD</button>
    </div>
  );
};

export default ShopItem;
