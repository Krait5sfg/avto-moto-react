import React from 'react';
import {NumberSliderImage, BIG_SLIDER_IMAGES} from '../../utils/const';

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

  return (
    <div className="goods__left-block slider">
      {/* block for big images */}
      <div className="slider__main-image-block slider__main-image-block--new-model">
        {bigSliderImages}
      </div>
      {/* block for small images */}
      <ul className="slider__list">
        <li
          className="slider__arrow slider__arrow--left"
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
        <li className="slider__item">
          <picture>
            <source type="image/webp" srcSet="img/black-car-mini@1x.webp 1x, img/black-car-mini@2x.webp 2x" />
            <img className="slider__image" src="img/black-car-mini@1x.jpg" srcSet="img/black-car-mini@2x.jpg 2x"
              alt="Марпех 11, вид снаружи, маленькое изображение" width="128" height="80" />
          </picture>
        </li>
        <li className="slider__item">
          <picture>
            <source type="image/webp" srcSet="img/desktop-car-mini@1x.webp 1x, img/desktop-car-mini@2x.webp 2x" />
            <img className="slider__image" src="img/desktop-car-mini@1x.jpg" srcSet="img/desktop-car-mini@2x.jpg 2x"
              alt="Марпех 11, вид приборной панели, маленькое изображение" width="128" height="80" />
          </picture>
        </li>
        <li className="slider__item">
          <picture>
            <source type="image/webp" srcSet="img/desktop-speedo-mini@1x.webp 1x, img/desktop-speedo-mini@2x.webp 2x" />
            <img className="slider__image" src="img/desktop-speedo-mini@1x.jpg" srcSet="img/desktop-speedo-mini@2x.jpg 2x"
              alt="Марпех 11, вид спидометра, маленькое изображение" width="128" height="80" />
          </picture>
        </li>
        <li
          className="slider__arrow slider__arrow--right"
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