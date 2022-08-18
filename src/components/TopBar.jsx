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
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
