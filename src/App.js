import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => (
  <div className="app">
    <h1>Product Catalog</h1>
    <ProductList />
    <Cart />
  </div>
);

export default App;
