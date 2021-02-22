import React from 'react';

const TabSpecification = ({isActive}) => {
  const elementClassName = isActive ? `about__specifications-list specification` : `about__specifications-list specification--not-active`;

  return (
    <ul className={elementClassName}>
      <li className="specification__item">
        <span className="specification__type">Трансмиссия</span>
        <span className="specification__text">Роботизированная</span>
      </li>
      <li className="specification__item">
        <span className="specification__type">Мощность двигателя, л.с.</span>
        <span className="specification__text">249</span>
      </li>
      <li className="specification__item">
        <span className="specification__type">Тип двигателя</span>
        <span className="specification__text">Бензиновый</span>
      </li>
      <li className="specification__item">
        <span className="specification__type">Привод</span>
        <span className="specification__text">Полный</span>
      </li>
      <li className="specification__item">
        <span className="specification__type">Объем двигателя, л</span>
        <span className="specification__text">2.4</span>
      </li>
      <li className="specification__item">
        <span className="specification__type">Макс. крутящий момент</span>
        <span className="specification__text">370/4500</span>
      </li>
      <li className="specification__item">
        <span className="specification__type">Количество цилиндров</span>
        <span className="specification__text">4</span>
      </li>
    </ul>
  );
};

export default TabSpecification;