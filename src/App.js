import style from "./scss/App.module.scss";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Write from "./pages/Write";
import Title from "./pages/Title";
import Diary from "./pages/Diary";
import Trend from "./pages/Trend";
import AnimatedCursor from "react-animated-cursor";
import { darkStateContext } from "./stores/DarkContext";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

function App() {
  /* 노트북 기준 화면 -> 세로 사이즈 다시 적용 */

  const { isDark } = useContext(darkStateContext);
  let cursorColor;
  if (isDark) {
    cursorColor = "185, 144, 255";
  } else {
    cursorColor = "255, 255, 254";
  }
  return (
    <div className={`${style.App}`}>
      <AnimatedCursor
        innerSize={20}
        outerSize={12}
        color={cursorColor}
        outerAlpha={0.2}
        innerScale={1}
        outerScale={5}
        trailingSpeed={7}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/write" element={<Write />} />
        <Route path="/title" element={<Title />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </div>
  );
}

export default App;
