import React from 'react';
import ShopItem from './ShopItem.jsx';
import { uniqueId } from 'lodash';

const ListView = (props) => {
  const { items } = props;

  return (
    <div className='items'>
      {items.map((itemData) => (
        <ShopItem key={uniqueId()} data={itemData} />
      ))}
    </div>
  );
};

export default ListView;
