import React from 'react';

const TabComment = ({isActive}) => {

  const elementClassName = isActive ? `about__comments comments` : `about__comments comments--not-active`;

  return (
    <div className={elementClassName}>
      <a href="/" className="comments__button button button--white-short">Оставить отзыв</a>
      <ul className="comments__list">
        <li className="comments__item">
          <span className="comments__user-name">Борис Иванов</span>
          <div className="comments__merit">
            <span className="comments__title">Достоинства</span>
            <span className="comments__text">мощность, внешний вид</span>
          </div>
          <div className="comments__flaw">
            <span className="comments__title">Недостатки</span>
            <span className="comments__text">Слабые тормозные колодки (пришлось заменить)</span>
          </div>
          <div className="comments__recall">
            <span className="comments__title">Комментарий</span>
            <span className="comments__text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по
            базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что
                полностью доволен.</span>
          </div>
          <div className="comments__stars">
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-red" />
            </svg>
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-red" />
            </svg>
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-red" />
            </svg>
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-grey" />
            </svg>
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-grey" />
            </svg >
            <span className="comments__text comments__text--red">Советует</span>
          </div >
          <div className="comments__time">
            <span className="comments__response-time">1 минуту назад</span>
            <a className="comments__link" href="/">Ответить</a>
          </div>
        </li >
        <li className="comments__item">
          <span className="comments__user-name">Марсель Исмагилов</span>
          <div className="comments__merit">
            <span className="comments__title">Достоинства</span>
            <span className="comments__text">Cтиль, комфорт, управляемость</span>
          </div>
          <div className="comments__flaw">
            <span className="comments__title">Недостатки</span>
            <span className="comments__text"> Дорогой ремонт и обслуживание</span>
          </div>
          <div className="comments__recall comments__recall--pixel-perfect">
            <span className="comments__title">Комментарий</span>
            <span className="comments__text">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины
            особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как
            новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на
                обслуживание.</span>
          </div>
          <div className="comments__stars">
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-red" />
            </svg>
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-red" />
            </svg>
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-red" />
            </svg >
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-grey" />
            </svg >
            <svg width="17" height="17">
              <use xlinkHref="#icon-star-grey" />
            </svg >
            <span className="comments__text comments__text--red">Советует</span>
          </div >
          <div className="comments__time">
            <span className="comments__response-time">1 минуту назад</span>
            <a className="comments__link" href="/">Ответить</a>
          </div>
        </li >
      </ul >
    </div >
  )
};

export default TabComment;