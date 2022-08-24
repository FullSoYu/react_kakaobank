import "../styles/TopBar.scss";

const TopBar = () => {
  return (
    <div className="nav-global">
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-logo">
            <a href="#">
              <img
                className="logo-img"
                src="https://www.kakaobank.com/static/images/web/logo_black.svg"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              은행소개
            </a>
            <div className="nav-subs">
              <div className="nav-sub">
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    카카오뱅크
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        브랜드
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        주주사 소개
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        오시는길
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        제휴문의
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    윤리경영
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        윤리강령
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        임직원행동기준
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    인재영입＞
                  </a>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    새소식
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        공지사항
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        보도자료
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        입찰공고
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              IR투자정보
            </a>
            <div className="nav-subs">
              <div className="nav-sub">
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    공시정보
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        전자공시
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        경영공시
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        바젤공시
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        기타공시
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        공시규정
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    경영정보
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        이사회
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        지속가능경영
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    재무정보
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        재무제표
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        감사보고서
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        영업보고서
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        신용등급
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    IR 자료실
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        실적발표
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        추가정보
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    IR일정
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        IR행사
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        IR미팅예약
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        주주총회
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    공고
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              상품안내
            </a>
            <div className="nav-subs">
              <div className="nav-sub">
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    예적금
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        입출금통장
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        모임통장
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        세이프박스
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        저금통
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        정기예금
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        자유적금
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        26주적금
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    대출
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        비상금대출
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        마이너스 통장대출
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        신용대출
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        개인사업자 대출
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        전월세보증금 대출
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        주택담보대출
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    서비스
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        내 신용정보
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        해외송금 보내기
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        해외송금 받기
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        프렌즈 체크카드
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    제휴서비스
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        증권사 주식계좌
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        제휴 신용카드
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    mini
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        카카오뱅크 mini
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        mini 카드
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        mini 26일저금
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              고객센터
            </a>
            <div className="nav-subs">
              <div className="nav-sub">
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    이용안내
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        자주 묻는 질문
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        이용시간 안내
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        ATM 이용안내
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        금리안내
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        금리인하요구권 안내
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        수수료안내
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        상담안내
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    상담하기
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        고객의 소리
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        1:1 문의
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    소비자보호
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        소비자보호체계
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        소비자보호 우수사례
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        전자민원
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        소비자보호공시
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        민원사무편람
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        금융정보
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        금융사기 관령공시
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        보안취약점 신고 안내
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    증명서
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        나의 증명서 발급내역
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        증명서 진위 확인
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    약관 · 서식
                  </a>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        약관
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        서식
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        상품설명서
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-links">
                    <li className="nav-link">
                      <a href="#" className="nav-anchor">
                        상품공시
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              이벤트
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              서류제출하기
            </a>
          </li>
        </ul>
      </div>
      {/* 나눌영역 */}
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
      {/* 나눌 영역 */}
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
