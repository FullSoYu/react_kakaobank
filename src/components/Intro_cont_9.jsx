import React from "react";
import "../styles/Intro_cont_9.scss";

const Intro_cont_9 = () => {
  return (
    <div>
      <div></div>
      <div className="intro_cont_9">
        <div className="intro_cont_9_txt">
          <h3>
            IT 기술로 카카오뱅크를
            <br />
            만들어 갑니다.
          </h3>
        </div>
        <div className="intro_cont_9_bar"></div>
        <div className="intro_cont_9_img">
          <img
            src="https://www.kakaobank.com/static/images/web/home_it.png"
            alt=""
          />
          <ul>
            <li>
              <strong>간결하고, 유려하게</strong>
              <p>
                작은 모바일 화면에 적합하도록
                <br />
                복잡함을 덜어낸
                <br />
                유려하고 친화적인 UX
              </p>
            </li>
            <li>
              <strong>간편한 인증, 철저한 보안</strong>
              <p>
                지문, 비밀번호로 간편한 인증
                <br />
                IT 기술의 강력한 보안 검증과
                <br />
                데이터 암호화
              </p>
            </li>
            <li>
              <strong></strong>
              <p></p>
            </li>
            <li>
              <strong>Mobile First, One App</strong>
              <p>
                모바일에서 뱅킹이 더 쉽고 편리하게
                <br />
                여러 앱을 설치할 필요 없이
                <br />
                하나의 앱으로
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro_cont_9;
