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
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    윤리경영
                  </a>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    인재영입>
                  </a>
                </div>
                <div className="nav-sub-item">
                  <a href="#" className="nav-sub-title">
                    새소식
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              IR투자정보
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              상품안내
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-title">
              고객센터
            </a>
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
      <div className="intro_main">
        <div className="intro_main_content"></div>
        <div className="background-line"></div>
      </div>
    </div>
  );
};

export default TopBar;
