import React from 'react';
import {NumberSliderImage, BIG_SLIDER_IMAGES, SMALL_SLIDER_IMAGES} from '../../utils/const';

const Slider = () => {
  let [count, setCount] = React.useState(NumberSliderImage.FIRST);

  const bigSliderImages = BIG_SLIDER_IMAGES.map(({sourceSet, imageSource, imageSourceSet, imageDescription}, index) => {
    return (
      <picture key={index}>
        <source type={`image/webp`} srcSet={sourceSet} />
        <img className={count === index ? `slider__image` : `slider__image hidden`} src={imageSource} srcSet={imageSourceSet}
          alt={imageDescription} width={`600`} height={`375`} />
      </picture>
    )
  });

  const smallSliderImages = SMALL_SLIDER_IMAGES.map(({sourceSet, imageSource, imageSourceSet, imageDescription}, index) => {
    return (
      <li className="slider__item" key={index}>
        <picture>
          <source type="image/webp" srcSet={sourceSet} />
          <img className="slider__image" src={imageSource} srcSet={imageSourceSet}
            alt={imageDescription} width="128" height="80" />
        </picture>
      </li>
    )
  });

  return (
    <div className="goods__left-block slider">
      {/* block for big images */}
      <div className="slider__main-image-block slider__main-image-block--new-model">
        {bigSliderImages}
      </div>
      {/* block for small images */}
      <ul className="slider__list">
        <li className="slider__arrow slider__arrow--left"
          onClick={() => {
            if (count === NumberSliderImage.FIRST || count < NumberSliderImage.FIRST) {
              return false;
            }
            setCount(--count);
          }}
        >
          <svg className={count === NumberSliderImage.FIRST || count < NumberSliderImage.FIRST ? `slider__not-active-arrow` : `slider__active-arrow`} width="20" height="20">
            <use xlinkHref="#icon-arrow-left" />
          </svg>
        </li>
        {smallSliderImages}
        <li className="slider__arrow slider__arrow--right"
          onClick={() => {
            if (count === NumberSliderImage.THIRD || count > NumberSliderImage.THIRD) {
              return false;
            }
            setCount(++count);
          }}
        >
          <svg className={count === NumberSliderImage.THIRD || count > NumberSliderImage.THIRD ? `slider__not-active-arrow` : `slider__active-arrow`} width="20" height="20">
            <use xlinkHref="#icon-arrow-right" />
          </svg>
        </li>
      </ul>
    </div>
  )
};

export default Slider;