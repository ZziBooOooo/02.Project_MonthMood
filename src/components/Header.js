import React, { useState, useEffect, useContext } from "react";
import style from "../scss/Main.module.scss";
import Logo from "../assets/imgs/MM.png";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { ContextGifData } from "./../App";
import { UserInfoContextStore } from "../pages/UserInfoContext";

/* 
*** 현재메뉴 활성화 로직
스테이트 변경함수와 다른 일을 실행할 때 스테이트변경함수는 먼저 적혀있어도 나중에 실행됨
 -> context를 사용해서 스테이트변경을 하면 동시에 렌더링됨 ?_?
*/

const Header = () => {
  const { test, setTest } = useContext(ContextGifData);
  const UserInfo = useContext(UserInfoContextStore);

  let navigate = useNavigate();
  let isLoginSuccess = window.localStorage.getItem("login_Success");
  // console.log(isLoginSuccess);
  const [islogin, setIsLogin] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const [isDark, setIsDark] = useState(true);

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
    setTest("TREND");
    console.log(currentMenu);
  }
  function goGOMM() {
    // console.log(islogin);
    if (islogin) {
      navigate("/write");
    } else {
      navigate("/login");
    }
    setTest("");
  }
  function goDIARY() {
    if (islogin) {
      navigate("/diary");
    } else {
      navigate("/login");
    }
    setTest("DIARY");
  }
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const onClick = (e) => {
    console.log(isDark);
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setIsDark(!isDark);
    console.log(isDark);
  };

  return (
    <div className={`${style.menubar}`}>
      <div className={`${style.leftMenubar}`}>
        <p
          onClick={() => {
            setTest("");
            navigate("/");
          }}
        >
          MONTH MOOD
        </p>
      </div>
      <div className={`${style.middleMenubar}`}>
        {}
        <p
          className={test == "HOME" ? `${style.currentMenu}` : null}
          onClick={() => {
            setTest("HOME");
            navigate("/");
          }}
        >
          HOME
        </p>

        <p
          className={test == "TREND" ? `${style.currentMenu}` : null}
          onClick={() => {
            setTest("TREND");
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
          className={test == "DIARY" ? `${style.currentMenu}` : null}
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
        <div className={`${style.toggle}`}>
          <button htmlFor="switch" onClick={onClick}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
