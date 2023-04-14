import React from 'react';
import Store from './Store.jsx';
import products from '../assets/products';

const icons = ['view_list', 'view_module'];

const App = () => (
  <Store products={products} icons={icons} />
);

export default App;
