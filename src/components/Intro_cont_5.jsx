import React from "react";
import "../styles/Intro_cont_5.scss";

const Intro_cont_5 = () => {
  return (
    <div>
      <div className="intro_cont_divider"></div>
      <div className="intro_cont_5">
        <div className="intro_cont_5_txt">
          <h3>
            함께 도전해서
            <br />
            재미있는 26주적금
          </h3>
          <p>
            26주동안 변화하는 재미에 빠져있는사이
            <br />
            어느덧 만기 달성 경험을 맛보게 됩니다.
          </p>
        </div>
        <div className="intro_cont_5_btn">
          <a href="#">
            26주적금
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr.png"
              alt=""
            />
          </a>
        </div>
        <div className="intro_cont_5_img">
          <img
            src="https://www.kakaobank.com/static/images/web/renewal/main-26weeks.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro_cont_5;
