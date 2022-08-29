import "../styles/Intro_cont_4.scss";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

const Intro_cont_4 = () => {
  return (
    <div>
      <div className="intro_cont_divider"></div>
      <div className="intro_cont_4">
        <div className="intro_cont_4_img">
          <img
            className="intro_cont_4_img"
            src="https://www.kakaobank.com/static/images/web/renewal/main-moim.png"
            alt=""
          />
        </div>
        <div className="intro_cont_4_txt">
          <h3>
            함께 쓰고 같이 보는
            <br />
            모임통장
          </h3>
          <p>
            카카오톡 친구를 모임통장으로 초대하고
            <br />
            친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
            <br />
            재미있는 메시지 가트로 회비 입금 요청도 해보세요.
          </p>
        </div>
        <div className="intro_cont_4_btn">
          <a href="#">
            모임통장
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro_cont_4;
