import React, { useState, useEffect, useContext } from "react";
import style from "../scss/Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { gifDataContext } from "../stores/GifContext";
import { darkStateContext } from "../stores/DarkContext";
import { accountStateContext } from "../stores/AccountContext";
import { useNavigate } from "react-router-dom";
import sun from "../assets/imgs/sun.png";
import moon from "../assets/imgs/moon.png";
const Mobile_Header = () => {
  let navigate = useNavigate();
  const { currentMenu, setCurrentMenu } = useContext(gifDataContext);
  const { isDark, setIsDark } = useContext(darkStateContext);
  const { isLogin, setIsLogin } = useContext(accountStateContext);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let isLoginSuccess = JSON.parse(
      window.localStorage.getItem("login_Success")
    );
    console.log(isLoginSuccess);

    if (isLoginSuccess == null || !isLoginSuccess) {
      setIsLogin(false);
    } else if (isLoginSuccess) {
      setIsLogin(true);
    }
  }, []);
  function clickLogOut() {
    window.localStorage.setItem("login_Success", false);
    setIsLogin(false);
  }
  function goTREND() {
    navigate("/trend");
    setCurrentMenu("TREND");
    console.log(currentMenu);
  }
  function goGOMM() {
    // console.log(isLogin);
    if (isLogin) {
      navigate("/write");
    } else {
      navigate("/login");
    }
    setCurrentMenu("");
  }
  function goDIARY() {
    if (isLogin) {
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
    <>
      <div className={`${style.m_header_box}`}>
        <p className={`${style.svgWrap}`}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setIsShow(true);
            }}
          />
        </p>
        <div className={`${style.rightFullMenubar}`}>
          {isLogin ? (
            <button
              className={`${style.rightMenubar} ${style.accountBtn}`}
              onClick={clickLogOut}
            >
              LOGOUT
            </button>
          ) : (
            <button
              className={`${style.rightMenubar} ${style.accountBtn}`}
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
      <div className={`${style.sideOpaBox}`}></div>
      {/* <div className={`${style.sideBarBox} ${style.showBar}`}> */}
      <div
        className={
          isShow
            ? `${style.sideBarBox} ${style.showBar}`
            : `${style.sideBarBox}`
        }
      >
        <button
          onClick={() => {
            setIsShow(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p
          className={style.logoText}
          onClick={() => {
            setCurrentMenu("");
            navigate("/");
          }}
        >
          MONTH MOOD
        </p>

        <div className={`${style.sideMenubar}`}>
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
      </div>
    </>
  );
};

export default Mobile_Header;
