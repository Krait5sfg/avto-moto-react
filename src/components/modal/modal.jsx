import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {EMPTY_STRING_VALUE, FormFieldName, RATINGS} from '../../utils/const';
import {getDate} from '../../utils/utils';
import PropTypes from 'prop-types';

const Modal = ({isActive, onModalCloseClick, updateComments}) => {
  const [isErrorValidationName, setErrorValidationName] = React.useState(false);
  const [isErrorValidationComment, setErrorValidationComment] = React.useState(false);
  const [isCommentFieldWasInWorkLast, setCommentFieldWasInWorkLast] = React.useState(false);
  React.useEffect(() => {

    if (isErrorValidationName) {
      inputNameRef.current.focus();
    }
    if (isErrorValidationComment || isCommentFieldWasInWorkLast) {
      inputCommentRef.current.focus();
      return false;
    }

    inputNameRef.current.focus();
  });

  const elementClassName = isActive ? `modal modal--active` : `modal`;
  const inputNameRef = React.createRef();
  const inputCommentRef = React.createRef();
  const formRef = React.createRef();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);

    // проверка поля name
    if (formData.get(FormFieldName.NAME) === EMPTY_STRING_VALUE) {
      setErrorValidationName(true);
      return false;
    }

    //проверка поля comment
    if (formData.get(FormFieldName.COMMENT) === EMPTY_STRING_VALUE) {
      setErrorValidationComment(true);
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

    onModalCloseClick(evt);
  }

  const onFormInput = (evt) => {
    if (evt.target.name === `name` && isErrorValidationName === true) {
      setErrorValidationName(false);
      setCommentFieldWasInWorkLast(false); //для того чтобы фокус не перескакивал с инпута name на comment
    }
    if (evt.target.name === `comment` && isErrorValidationComment === true) {
      setErrorValidationComment(false);
      setCommentFieldWasInWorkLast(true);
    }
  };

  const formRatingInputElements = RATINGS.map((numberRating, index) => {
    return (
      <React.Fragment key={index}>
        <input className="form__rating-input visually-hidden" name="rating" value={numberRating} id={`${numberRating}-stars`} type="radio" />
        <label htmlFor={`${numberRating}-stars`} className="form__rating-label" title="perfect">
          <svg className="form__star-image" width="27" height="27">
            <use xlinkHref="#icon-star-rating" />
          </svg>
        </label>
      </React.Fragment>
    );
  });

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
          onInput={onFormInput}
        >

          <div className="form__left-block">
            <p className={isErrorValidationName ? `form__info` : `form__info form__info--not-active`}>Пожалуйста, заполните поле</p>
            <label className="form__name-field-label visually-hidden" htmlFor="name" aria-label="Поле для ввода имени"></label>
            <input className={isErrorValidationName ? `form__input form__input--name form__input--not-valid` : `form__input form__input--name`} type="text" placeholder="Имя" name="name" id="name" ref={inputNameRef} />
            <label className="form__merit-field-label visually-hidden" htmlFor="merit"
              aria-label="Поле для ввода положительных особенностей автомобиля"></label>
            <input className="form__input form__input--merit" type="text" name="merit" id="merit" placeholder="Достоинства" />
            <input className="form__input form__input--flaw" type="text" name="flaw" id="flaw" placeholder="Недостатки" />
          </div>

          <div className="form__right-block">
            <div className="form__rating-block">
              {formRatingInputElements}
              <p className="form__title-rating">Оцените товар:</p>
            </div>
            <p className={isErrorValidationComment ? `form__info` : `form__info form__info--not-active`}>Пожалуйста, заполните поле</p>
            <label className="form__text-area-label visually-hidden" htmlFor="comment" aria-label="Поле для комментария"></label>
            <textarea className={isErrorValidationComment ? `form__text-area form__text-area--not-valid` : `form__text-area`} name="comment" id="comment" placeholder="Комментарий" ref={inputCommentRef}></textarea>
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
    </div >
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onModalCloseClick: PropTypes.func.isRequired,
  updateComments: PropTypes.func.isRequired
};

const mapDispatchToProps = ((dispatch) => ({
  updateComments(comments) {
    dispatch(ActionCreator.updateComments(comments));
  }
}));

export default connect(null, mapDispatchToProps)(Modal);