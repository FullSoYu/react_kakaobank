import "../styles/TopBar.scss";

const TopBar = () => {
  return (
    <header class="top-bar h-[81px] border-b-[1px] ">
      <div class="con mx-auto h-full flex">
        <a href="#" class="flex items-center px-[10px] mr-auto">
          <img
            src="https://www.kakaobank.com/static/images/web/logo_black.svg"
            alt=""
          />
        </a>
        <nav className="menu-1">
          <ul className="flex h-hull">
            <li>
              <a
                href="#"
                className="flex j-full items-center px-[10px] hover:underline"
              >
                은행소개
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex j-full items-center px-[10px] hover:underline"
              >
                IR투자정보
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex j-full items-center px-[10px] hover:underline"
              >
                상품소개
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex j-full items-center px-[10px] hover:underline"
              >
                고객센터
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex j-full items-center px-[10px] hover:underline"
              >
                이벤트
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#"
          class="btn-go-sumit self-center bg-[#FEDE22] p-[13px] rounded-[40px] ml-[20px]"
        >
          서류제출하기
        </a>
      </div>
    </header>
  );
};

export default TopBar;
