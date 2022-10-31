import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&amp;display=swap"
  rel="stylesheet"
></link>;
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&amp;display=swap"
  rel="stylesheet"
></link>;

function Main() {
  return (
    <div>
      <div className="head">
        <div className="meun-bar">
          <div>
            <img
              src="	https://www.tokkijung.co.kr/tokkijung/images/common/logo.png"
              alt="토끼정로고"
            ></img>
          </div>
          {/* <div className="meun-body"> */}
          <ul className="title-1">
            <li>
              토끼정
              <ul className="sub">
                <li>스토리</li>
                <li>컨셉</li>
              </ul>
            </li>
            <li>
              메뉴
              <ul className="sub">
                <li>토끼밥상</li>
                <li>카레</li>
                <li>덮밥</li>
                <li>면요리</li>
                <li>특제요리</li>
                <li>곁들임</li>
                <li>음료</li>
              </ul>
            </li>
            <li>
              매장z
              <ul className="sub">
                <li>매장찾기</li>
              </ul>
            </li>
            <li>
              창업안내
              <ul className="sub">
                <li>브랜드 경쟁력</li>
                <li>창업 절차 및 비용</li>
                <li>창업 Q&A</li>
                <li>창업 상담 신청</li>
              </ul>
            </li>
            <li>
              고객문의
              <ul className="sub">
                <li>유용한 질문(FAQ)</li>
                <li>고객의 소리</li>
              </ul>
            </li>
          </ul>
          <div className="fixbg"></div>
          {/* </div> */}

          <div>
            <img
              src="https://www.tokkijung.co.kr/tokkijung/images/icon/top_panel.png"
              alt="더보기란"
            ></img>
          </div>
        </div>
      </div>
      <div class="main_slide_m">
        <div class="main_vtxt_logo">
          <img src="https://www.tokkijung.co.kr/tokkijung/images/main/main_txt_logo.png"></img>
        </div>
        <div className="ment">
          <div class="main_vtxt1">편안하게 식사를 즐길 수 있는</div>
          <div class="main_vtxt2">안락한 공간</div>
          <div class="main_vtxt3"></div>
          <div class="main_vtxt4">‘정(停)’ 있는 가게</div>
        </div>

        <img
          src="https://www.tokkijung.co.kr/tokkijung/images/main/mv1_03_m.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
