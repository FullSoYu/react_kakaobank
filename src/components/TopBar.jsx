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
            <a href="#">은행소개</a>
          </li>
          <li className="nav-item">
            <a href="#">IR투자정보</a>
          </li>
          <li className="nav-item">
            <a href="#">상품안내</a>
          </li>
          <li className="nav-item">
            <a href="#">고객센터</a>
          </li>
          <li className="nav-item">
            <a href="#">이벤트</a>
          </li>
          <li className="nav-item">
            <a href="#">서류제출하기</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
