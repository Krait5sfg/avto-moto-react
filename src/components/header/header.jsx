import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <svg width="55" height="55">
          <use xlinkHref="#icon-logo" />
        </svg>
        <ul className="header__list">
          <li className="header__item">Avto</li>
          <li className="header__item">Moto</li>
        </ul>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="/">Автомобили</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/">Контакты</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/">Услуги</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default Header;