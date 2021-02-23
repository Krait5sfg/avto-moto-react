import React from 'react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">
          <li className="footer__item"><a className="footer__link" href="/">Корпоративным клиентам</a></li>
          <li className="footer__item"><a className="footer__link" href="/">Клиентам</a></li>
          <li className="footer__item"><a className="footer__link" href="/">Аренда авто</a></li>
          <li className="footer__item"><a className="footer__link" href="/">Каршеринг</a></li>
          <li className="footer__item"><a className="footer__link" href="/">Как продать авто</a></li>
          <li className="footer__item"><a className="footer__link" href="/">Traid-in</a></li>
          <li className="footer__item"><a className="footer__link" href="/">Test draiv</a></li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;