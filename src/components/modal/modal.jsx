import React from 'react';

const Modal = ({isActive}) => {

  const elementClassName = isActive ? `modal modal--active` : `modal`;

  return (
    <div className={elementClassName}>
      <div className="modal__content">
        <h2 className="modal__title">Оставить отзыв</h2>
        <form className="modal__form form" action="somefile.php" method="post">

          <div className="form__left-block">
            <p className="form__info">Пожалуйста, заполните поле</p>
            <label className="form__name-field-label visually-hidden" htmlFor="name" aria-label="Поле для ввода имени"></label>
            <input className="form__input form__input--name" type="text" placeholder="Имя" name="name" required id="name" />
            <label className="form__merit-field-label visually-hidden" htmlFor="merit"
              aria-label="Поле для ввода положительных особенностей автомобиля"></label>
            <input className="form__input form__input--merit" type="text" name="merit" id="merit" placeholder="Достоинства" />
            <input className="form__input form__input--flaw" type="text" name="flaw" id="flaw" placeholder="Недостатки" />
          </div>

          <div className="form__right-block">
            <div className="form__rating-block">
              <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
              <label htmlFor="5-stars" className="form__rating-label" title="perfect">
                <svg className="form__star-image" width="27" height="27">
                  <use xlinkHref="#icon-star-rating" />
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
              <label htmlFor="4-stars" className="form__rating-label" title="good">
                <svg className="form__star-image" width="27" height="27">
                  <use xlinkHref="#icon-star-rating" />
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
              <label htmlFor="3-stars" className="form__rating-label" title="not bad">
                <svg className="form__star-image" width="27" height="27">
                  <use xlinkHref="#icon-star-rating" />
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
              <label htmlFor="2-stars" className="form__rating-label" title="badly">
                <svg className="form__star-image" width="27" height="27">
                  <use xlinkHref="#icon-star-rating" />
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
              <label htmlFor="1-star" className="form__rating-label form__rating-label--first" title="terribly">
                <svg className="form__star-image" width="27" height="27">
                  <use xlinkHref="#icon-star-rating" />
                </svg>
              </label>

              <p className="form__title-rating">Оцените товар:</p>
            </div>
            <label className="form__text-area-label visually-hidden" htmlFor="comment" aria-label="Поле для комментария"></label>
            <textarea className="form__text-area" name="comment" id="comment" placeholder="Комментарий" required></textarea>
          </div>

          <input className="form__submit" type="submit" value="Оставить отзыв" />
        </form>
        <button className="modal__close">
          <svg width="16" height="16">
            <use xlinkHref="#icon-close" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;