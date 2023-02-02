import React, { useState, useEffect, useContext } from "react";
import style from "../scss/Main.module.scss";
import Logo from "../assets/imgs/MM.png";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { ContextGifData } from "./../App";

const Header = () => {
  const { test, setTest } = useContext(ContextGifData);
  let navigate = useNavigate();
  let isLoginSuccess = window.localStorage.getItem("login_Success");
  // console.log(isLoginSuccess);
  const [islogin, setIsLogin] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");

  useEffect(() => {
    console.log(1);
  }, [currentMenu]);
  useEffect(() => {
    let isLoginSuccess = window.localStorage.getItem("login_Success");
    setIsLogin(isLoginSuccess);
  }, []);
  function clickLogOut() {
    window.localStorage.setItem("login_Success", false);
    setIsLogin(false);
  }
  console.log(currentMenu);
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
  const menulist = [
    ["HOME"],
    ["TREND", goTREND],
    ["GOMM", { goGOMM }],
    ["DIARY", { goDIARY }],
  ];
  console.log(menulist);
  return (
    <div className={`${style.menubar}`}>
      <div className={`${style.leftMenubar}`}>
        <p
          onClick={() => {
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
          className={currentMenu == "DIARY" ? `${style.currentMenu}` : null}
          onClick={goDIARY}
        >
          DIARY
        </p>
      </div>
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
    </div>
  );
};

export default Header;
