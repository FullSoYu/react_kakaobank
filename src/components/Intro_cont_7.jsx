import "../styles/Intro_cont_7.scss";
import AOS from "aos";
import React, { useEffect, usest } from "react";
import "aos/dist/aos.css";

AOS.init({ duration: 3000 });

const intro_cont_7 = () => {
  return (
    <div>
      <div></div>
      <div className="intro_cont_7">
        <div className="intro_cont_7_bg_1"></div>
        <div className="intro_cont_7_bg_2"></div>
        <div className="intro_cont_7_img">
          <img
            src="https://www.kakaobank.com/static/images/web/renewal/main-loan.png"
            alt=""
          />
        </div>
        <div className="intro_cont_7_txt">
          <h3>복잡한 서류 제출을 간편하게, 내가 원하는 시간에</h3>
          <p>
            이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할수
            있습니니다.
          </p>
        </div>
        <div className="intro_cont_7_btn">
          <a href="#">
            마이너스 통장대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
          <a href="#">
            신용대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
          <a href="#">
            개인사업자 대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
          <a href="#">
            전월세보증금 대출
            <img
              src="https://www.kakaobank.com/static/images/web/home_arr2.png"
              alt=""
            />
          </a>
        </div>
        <span className="moon">
          <span className="moon_original"></span>

          <span className="moon_shadow"></span>
        </span>
        <span className="star star1"></span>
        <span className="star star2"></span>
        <span className="star star3"></span>
        <span className="star star4"></span>
        <span className="star star5"></span>
        <span className="star star6"></span>
        <span className="star star7"></span>
      </div>
    </div>
  );
};

let intro_cont_7_bg = document.querySelector("intro_cont_7_bg_2");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scollY", value);
  if (value < 3940) {
    intro_cont_7_bg.styled.animaition = "diapear 1s ease-out";
  }
});
//==================Uncaught TypeError: Cannot read properties of null (reading 'style') at 에러 발생 스크롤 값은 나오나
//스크롤 값으로 애니매이션 동작을 좌지우지 할 수 없음

//======동작안됨=============
// const [scroll, setScroll] = useState(false);

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll); //clean up
//   };
// }, []);

// const handleScroll = () => {
//   // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
//   if (window.scrollY >= 3940) {
//     setScroll(true);
//     console.log(scroll);
//   } else {
//     // 스크롤이 50px 미만일경우 false를 넣어줌
//     setScroll(false);
//   }
// };
//==============================
export default intro_cont_7;
