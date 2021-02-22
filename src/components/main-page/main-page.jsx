import React from 'react';
import Header from '../header/header';
import Goods from '../goods/goods';
import About from '../about/about';
import Modal from '../modal/modal';

const MainPage = () => {

  const [isModalActive, setModalActive] = React.useState(false);

  const onModalButtonClick = (evt) => {
    evt.preventDefault();
    setModalActive(true);
  };

  return (
    <React.Fragment>
      <Header />
      <Goods />
      <About onModalButtonClick={onModalButtonClick} />
      <Modal isActive={isModalActive} />
    </ React.Fragment>
  );
};

export default MainPage;
