import React from 'react';
import Header from '../header/header';
import Goods from '../goods/goods';
import About from '../about/about';
import Modal from '../modal/modal';
import {EscapeCode} from '../../utils/const';

const MainPage = () => {

  const [isModalActive, setModalActive] = React.useState(false);

  React.useEffect(() => {
    isModalActive ?
      document.addEventListener(`keydown`, onEscButtonPress, false) :
      document.removeEventListener(`keydown`, onEscButtonPress, false);
  });

  const onEscButtonPress = React.useCallback((evt) => {
    if (evt.key === EscapeCode.STRING && evt.keyCode === EscapeCode.NUMBER) {
      setModalActive(false);
    }
  }, []);

  const onModalOpenButtonClick = (evt) => {
    evt.preventDefault();
    setModalActive(true);
  };

  const onModalCloseClick = (evt) => {
    evt.preventDefault();
    setModalActive(false);
  };

  return (
    <React.Fragment>
      <Header />
      <Goods />
      <About onModalOpenButtonClick={onModalOpenButtonClick} />
      <Modal
        isActive={isModalActive}
        onModalCloseClick={onModalCloseClick}
      />
    </ React.Fragment>
  );
};

export default MainPage;
