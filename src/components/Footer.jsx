import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="box">
          <div className="footer_info">
            <div>
              <a href="#">모바일뱅킹 서비스 이용약관</a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a href="#">전자금융거래 기본약관</a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a className="link" href="#">
                위치기반 서비스 이용약관
              </a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a className="link" href="#">
                개인정보처리방침
              </a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a className="link" href="#">
                전자민원접수
              </a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a href="#">보호금융상품등록부</a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a href="#">상품공시실</a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a href="#">경영공시</a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a href="#">공지사항</a>
              <br />
            </div>
            <div>
              <a href="#">전자서명인증업무준칙</a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a href="#">카카오뱅크 인증서 서비스 이용약관</a>
              <span className="txt_bar"></span>
            </div>
            <div>
              <a href="#">카카오뱅크 인증서 서비스 개인정보처리방침</a>
            </div>
          </div>
          <div className="footer_info2">
            <span className="footer_info2_txt">
              (주)카카오뱅크∙윤호영∙사업자번호 375-88-00197
            </span>
            <span className="footer_info2_txt2">대표전화번호 1599-3333</span>

            <span className="footer_infor_tel">(해외 +82-2-6420-3333)</span>
          </div>
          <div className="footer_info3">
            Copyright © KakaoBank Corp. All rights reserved.
          </div>
          <div className="footer_info4">
            <a href="">
              <img
                src="https://www.kakaobank.com/static/images/web/footer/webaccessibility.png"
                alt=""
              />
              <div className="footer_info4_txt">
                <span>웹 접근성 품질인증</span>
              </div>
            </a>
            <ul className="footer_link_list">
              <li>
                <a href="#">
                  <span className="facebook_link"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="instar_link"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="youtube_link"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="unknown_link"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
