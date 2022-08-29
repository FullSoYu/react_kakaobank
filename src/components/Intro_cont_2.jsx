import React from "react";
import "../styles/Intro_cont_2.scss";

const Intro_cont_2 = () => {
  return (
    <div>
      <div className="intro_cont cont_withdrawal">
        <div className="cont_img">
          <img
            className="cont_img_img"
            src="https://www.kakaobank.com/static/images/web/renewal/main-withdrawal.png"
            alt="카카오뱅크 계좌 이체 화면"
          />
        </div>
        <div className="cont_txt">
          <h3 className="cont_txt_h3">
            모바일로 더 손쉬운
            <br />
            계좌계설, 간편한 이체
          </h3>
          <p className="cont_txt_p">
            인증서, OTP 없이 계좌 개설이 간편합니다.
            <br />
            여러건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
          </p>
        </div>
        <div className="cont_btn">
          <a className="link_bank" href="#">
            카카오뱅크 입출금통장
            <img
              className="ico_arr"
              src="https://www.kakaobank.com/static/images/web/home_arr.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro_cont_2;
