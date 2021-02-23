import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {EMPTY_STRING_VALUE, FormFieldName} from '../../utils/const';
import {getDate} from '../../utils/utils';

const Modal = ({isActive, onModalCloseClick, updateComments}) => {
  React.useEffect(() => {
    inputNameRef.current.focus();
  });

  const elementClassName = isActive ? `modal modal--active` : `modal`;
  const inputNameRef = React.createRef();
  const formRef = React.createRef();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);

    if (formData.get(FormFieldName.NAME) === EMPTY_STRING_VALUE || formData.get(FormFieldName.COMMENT) === EMPTY_STRING_VALUE) {
      return false;
    }

    const comments = [{
      name: formData.get(FormFieldName.NAME),
      merit: formData.get(FormFieldName.MERIT),
      flaw: formData.get(FormFieldName.FLAW),
      rating: formData.get(FormFieldName.RATING),
      comment: formData.get(FormFieldName.COMMENT),
      date: getDate(),
    }];
    updateComments(comments);

    //save data from form to LocalStorage
    localStorage.setItem('userFormData', JSON.stringify(comments[0]));
  }

  return (
    <div
      className={elementClassName}
      onClick={onModalCloseClick}>
      <div className="modal__content"
        onClick={(evt) => {
          evt.stopPropagation();
        }}>
        <h2 className="modal__title">Оставить отзыв</h2>
        <form className="modal__form form"
          action="somefile.php"
          method="post"
          ref={formRef}
          onSubmit={onFormSubmit}
        >

          <div className="form__left-block">
            <p className="form__info">Пожалуйста, заполните поле</p>
            <label className="form__name-field-label visually-hidden" htmlFor="name" aria-label="Поле для ввода имени"></label>
            <input className="form__input form__input--name" type="text" placeholder="Имя" name="name" id="name" required ref={inputNameRef} />
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
        <button
          className="modal__close"
          onClick={onModalCloseClick}
        >
          <svg width="16" height="16">
            <use xlinkHref="#icon-close" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = ((dispatch) => ({
  updateComments(comments) {
    dispatch(ActionCreator.updateComments(comments));
  }
}));

export default connect(null, mapDispatchToProps)(Modal);