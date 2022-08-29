import React from "react";
import "../styles/intro_cont_6.scss";

const intro_cont_6 = () => {
  return (
    <div className="intro_cont_6">
      <div className="intro_cont_6_img">
        <img
          src="https://www.kakaobank.com/static/images/web/renewal/main-foreignRemittance-new.png"
          alt=""
        />
      </div>
      <div className="intro_cont_6_txt">
        <h3>
          해외계좌송금과
          <br />
          WU빠른해외송금을
          <br />더 쉽고, 저렴하게
        </h3>
        <p>
          해외계좌송금이 가능한 22개국을 포함하여
          <br />
          전세계 200여개국으로
          <br />
          WU빠른해외송금이 가능합니다.
        </p>
      </div>
      <div className="intro_cont_6_btn">
        <a href="#">
          해외송금
          <img
            src="https://www.kakaobank.com/static/images/web/home_arr.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default intro_cont_6;
