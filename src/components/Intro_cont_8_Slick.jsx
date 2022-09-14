import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Intro_cont_8_Slick.scss";

const Intro_cont_8_Slick = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    Infinity: true,
    arrows: true,
    speed: 500,
    centerMode: true,
    centerPadding: 0,
  };

  return (
    <div className="con">
      <div className="carousel">
        <Slider {...settings} className="box">
          <div className="item">
            <img
              className="img-box"
              src="https://www.kakaobank.com/static/images/web/renewal/card-1.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              className="img-box"
              src="https://www.kakaobank.com/static/images/web/renewal/card-2.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              className="img-box"
              src="https://www.kakaobank.com/static/images/web/renewal/card-3.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              className="img-box"
              src="https://www.kakaobank.com/static/images/web/renewal/card-4.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              className="img-box"
              src="https://www.kakaobank.com/static/images/web/renewal/card-5.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Intro_cont_8_Slick;
