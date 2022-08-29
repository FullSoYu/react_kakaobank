import React from "react";
import "../styles/Intro_cont_1.scss";

const Intro_cont_1 = () => {
  return (
    <div>
      <div></div>
      <div className="intro_main">
        <div className="intro_main_content">
          <h3 className="tit_main">
            이미 모두의 은행
            <br />
            지금은 카카오뱅크
          </h3>
          <p className="tit_sub">
            한 사람, 한 사람을 위해 시작한 은행이
            <br />더 많은 사람들이 찾는 모두의 은행이 되었습니다.
          </p>
          <p className="tit_sub2">
            보내고, 받고, 모으고, 쓰는 <br />
            당신의 모든 일이 바뀌고 있습니다.
          </p>
          <ul className="list_store">
            <li className="link_stores">
              <a href="#" className="link_store">
                <span className="img_kabang"></span>
                GooglePlay
              </a>
            </li>
            <li className="link_stores">
              <a href="#" className="link_store">
                <span className="img_kabang ico_app"></span>
                App Store
              </a>
            </li>
          </ul>
        </div>
        <div className="background-line"></div>
      </div>
    </div>
  );
};

export default Intro_cont_1;
