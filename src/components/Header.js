import React, { useState, useEffect } from "react";
import style from "../scss/Main.module.scss";
import Logo from "../assets/imgs/MM.png";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const Header = () => {
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
  function goGOMM() {
    // console.log(islogin);
    if (islogin) {
      navigate("/write");
    } else {
      navigate("/login");
    }
  }
  function goDIARY() {
    if (islogin) {
      navigate("/diary");
    } else {
      navigate("/login");
    }
  }
  return (
    <div className={`${style.menubar}`}>
      <div className={`${style.leftMenubar}`}>
        {/* <img src={Logo}></img> */}
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          MONTH MOOD
        </p>
      </div>
      <div className={`${style.middleMenubar}`}>
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </p>
        <p
          onClick={() => {
            navigate("/trend");
          }}
        >
          TREND
        </p>
        <p onClick={goGOMM}>GOMM</p>
        <p onClick={goDIARY}>DIARY</p>
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
