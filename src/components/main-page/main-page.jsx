import React from 'react';
import Header from '../header/header';
import Goods from '../goods/goods';
import About from '../about/about';

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Goods />
      <About />
    </ React.Fragment>
  );
};

export default MainPage;

