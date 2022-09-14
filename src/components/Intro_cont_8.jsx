import React from "react";
import "../styles/Intro_cont_8.scss";
import Intro_cont_8_Slick from "../components/Intro_cont_8_Slick";

const intro_cont_8 = () => {
  return (
    <div>
      <div></div>
      <div className="intro_cont_8">
        <div className="intro_cont_8_txt">
          <h3>
            프렌즈 체크카드,
            <br />
            내가 고르는 선택의 즐거움
          </h3>
          <p>
            프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을
            선택할 수 있습니다.
          </p>
        </div>
        <div className="intro_cont_8_btn">
          <a href="#">
            카카오뱅크 프렌즈 체크카드
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr.png"
              alt=""
            />
          </a>
        </div>
        <div className="intro_cont_8_img"></div>
        <Intro_cont_8_Slick />
      </div>
    </div>
  );
};

export default intro_cont_8;
