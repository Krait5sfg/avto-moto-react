import React from 'react';

const GoodsDescription = () => {
  return (
    <div className="goods__right-block">
      <p className="goods__title">Марпех 11</p>
      <ul className="goods__list-icon">
        <li className="goods__item-icon">
          <svg className="goods__icon" width="24" height="22">
            <use xlinkHref="#icon-engine" />
          </svg>
        </li>
        <li className="goods__item-icon">
          <svg className="goods__icon" width="40" height="40">
            <use xlinkHref="#icon-speed-gearbox" />
          </svg>
        </li>
        <li className="goods__item-icon">
          <svg className="goods__icon" width="40" height="40">
            <use xlinkHref="#icon-power" />
          </svg>
        </li>
        <li className="goods__item-icon">
          <svg className="goods__icon" width="40" height="40">
            <use xlinkHref="#icon-volume" />
          </svg>
        </li >
      </ul >
      <ul className="goods__list-text">
        <li className="goods__item-text">бензин</li>
        <li className="goods__item-text">механика</li>
        <li className="goods__item-text">100 л.с.</li>
        <li className="goods__item-text">1.4 л</li>
      </ul>
      <div className="goods__price-block">
        <span className="goods__current-price">2 300 000 &#8381;</span>
        <span className="goods__old-price">2&#160;&#160;400 000 &#8381;</span>
      </div>
      <a href="/" className="goods__request button">Оставить заявку</a>
      <a href="/" className="goods__credit button button--white-long">В кредит от 11 000 &#8381;</a>
    </div >
  )
}

export default GoodsDescription;