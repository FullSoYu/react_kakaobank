import "../styles/Intro_cont_3.scss";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

const Intro_cont_3 = () => {
  return (
    <div>
      <div className="intro_cont_divider"></div>
      <div className="intro_cont_3">
        <div className="intro_cont_3_txt">
          <h3>
            우대조건 없이
            <br />
            합리적인 예금과 적금
          </h3>
          <p>
            기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
            <br />
            카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고
            합리적입니다.
          </p>
        </div>
        <div className="intro_cont_3_btn">
          <a className="link_deposit" href="#">
            정기예금
            <img
              className="link_deposit_img"
              src="https://www.kakaobank.com/static/images/web/home_arr.png"
              alt=""
            />
          </a>
          <a className="link_deposit" href="#">
            자유적금
            <img
              className="link_deposit_img"
              src="https://www.kakaobank.com/static/images/web/home_arr.png"
              alt=""
            />
          </a>
        </div>
        <div className="intro_cont_img">
          <img
            className="intro_cont_img_img"
            src="https://www.kakaobank.com/static/images/web/renewal/main-savings-money.png"
            alt=""
          />
        </div>
        <div className="intro_cont_img2">
          <img
            data-aos="fade-left"
            src="https://www.kakaobank.com/static/images/web/renewal/main-savings.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro_cont_3;
