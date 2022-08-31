import "../styles/Intro_cont_7.scss";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
AOS.init({ duration: 3000 });

const intro_cont_7 = () => {
  return (
    <div>
      <div></div>
      <div className="intro_cont_7">
        <div className="intro_cont_7_bg_1"></div>
        <div3 className="intro_cont_7_bg_2"></div3>
        <div className="intro_cont_7_img">
          <img
            src="https://www.kakaobank.com/static/images/web/renewal/main-loan.png"
            alt=""
          />
        </div>
        <div className="intro_cont_7_txt">
          <h3>복잡한 서류 제출을 간편하게, 내가 원하는 시간에</h3>
          <p>
            이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할수
            있습니니다.
          </p>
        </div>
        <div className="intro_cont_7_btn">
          <a href="#">
            마이너스 통장대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
          <a href="#">
            신용대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
          <a href="#">
            개인사업자 대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
          <a href="#">
            전월세보증금 대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
        </div>
        <span className="moon">
          <span className="moon_original"></span>
          <span className="moon_shadow"></span>
        </span>
      </div>
    </div>
  );
};

let mainbg = document.querySelector("div3");

window.addEventListener("scroll", function () {
  let value = window.screenY;
  console.log("scollY", value);
});

export default intro_cont_7;
