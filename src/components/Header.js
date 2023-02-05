import React, { useState, useEffect, useContext } from "react";
import style from "../scss/Main.module.scss";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { gifDataContext } from "../stores/GifContext";
import { darkStateContext } from "../stores/DarkContext";
import sun from "../assets/imgs/sun.png";
import moon from "../assets/imgs/moon.png";

/* 
*** 현재메뉴 활성화 로직
스테이트 변경함수와 다른 일을 실행할 때 스테이트변경함수는 먼저 적혀있어도 나중에 실행됨
 -> context를 사용해서 스테이트변경을 하면 동시에 렌더링됨 ?_?
*/

const Header = () => {
  // const { test, setTest } = useContext(ContextGifData);
  const { currentMenu, setCurrentMenu } = useContext(gifDataContext);
  const { isDark, setIsDark } = useContext(darkStateContext);

  let navigate = useNavigate();
  let isLoginSuccess = window.localStorage.getItem("login_Success");
  // console.log(isLoginSuccess);
  const [islogin, setIsLogin] = useState(false);

  useEffect(() => {
    let isLoginSuccess = window.localStorage.getItem("login_Success");
    setIsLogin(isLoginSuccess);
  }, []);
  function clickLogOut() {
    window.localStorage.setItem("login_Success", false);
    setIsLogin(false);
  }
  // console.log(currentMenu);
  function goTREND() {
    navigate("/trend");
    setCurrentMenu("TREND");
    console.log(currentMenu);
  }
  function goGOMM() {
    // console.log(islogin);
    if (islogin) {
      navigate("/write");
    } else {
      navigate("/login");
    }
    setCurrentMenu("");
  }
  function goDIARY() {
    if (islogin) {
      navigate("/diary");
    } else {
      navigate("/login");
    }
    setCurrentMenu("DIARY");
  }

  useEffect(() => {
    let localDark = JSON.parse(window.localStorage.getItem("localDark"));
    // console.log(localDark);
    if (localDark || localDark == null) {
      // console.log("다크모드");
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    } else if (!localDark) {
      // console.log("라이트모드");
      document.documentElement.setAttribute("data-theme", "light");
      setIsDark(false);
    }
  }, []);

  function onClick() {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("localDark", JSON.stringify(false));
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("localDark", JSON.stringify(true));
    }
    setIsDark(!isDark);
  }

  return (
    <div className={`${style.menubar}`}>
      <div className={`${style.leftMenubar}`}>
        <p
          onClick={() => {
            setCurrentMenu("");
            navigate("/");
          }}
        >
          MONTH MOOD
        </p>
      </div>
      <div className={`${style.middleMenubar}`}>
        {}
        <p
          className={currentMenu == "HOME" ? `${style.currentMenu}` : null}
          onClick={() => {
            setCurrentMenu("HOME");
            navigate("/");
          }}
        >
          HOME
        </p>

        <p
          className={currentMenu == "TREND" ? `${style.currentMenu}` : null}
          onClick={() => {
            setCurrentMenu("TREND");
            goTREND();
          }}
        >
          TREND
        </p>

        <p
          className={currentMenu == "GOMM" ? `${style.currentMenu}` : null}
          onClick={goGOMM}
        >
          GOMM
        </p>

        <p
          className={currentMenu == "DIARY" ? `${style.currentMenu}` : null}
          onClick={goDIARY}
        >
          DIARY
        </p>
      </div>
      <div className={`${style.rightFullMenubar}`}>
        {islogin ? (
          <button className={`${style.rightMenubar}`} onClick={clickLogOut}>
            LOGOUT
          </button>
        ) : (
          <button
            className={`${style.rightMenubar}`}
            onClick={() => {
              navigate("/login");
            }}
          >
            LOGIN
          </button>
        )}
        <div className={`${style.toggle}`} htmlFor="switch" onClick={onClick}>
          <button>
            <p>
              <img src={isDark ? `${sun}` : `${moon}`}></img>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
