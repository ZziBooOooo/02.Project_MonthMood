import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import style from "../scss/login.module.scss";
import pencil from "../assets/imgs/pencil.png";
import thinking from "../assets/imgs/thinking.png";
import novel from "../assets/imgs/novel.png";
import useIntersectionObsever from "./UseIntersectionObsever";
import AccountModal from "./AccountModal";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [validShow, setValidShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const loginBoxRef = useRef();

  const isInViewport = useIntersectionObsever(loginBoxRef);

  function checkUser() {
    if (id && password && id.length >= 5 && password.length >= 5) {
      let userDatas = JSON.parse(window.localStorage.getItem("Alluser"));
      // console.log(id, password); // 현재 입력한 값
      let localValue = userDatas.filter((data) => data.id == id);
      // console.log(localValue); // 입력한 id와 같은 id가 저장된 로컬데이터
      if (password == localValue[0].password) {
        console.log("로그인성공");
        window.localStorage.setItem("login_Success", true);
        setLoginModalShow(true);

        setTimeout(() => {
          setLoginModalShow(false);
        }, 4000);
        setTimeout(() => {
          navigate("/");
        }, 4500);
      } else {
        console.log("로그인실패");
        setValidShow(true);
      }
    }
  }
  function preventEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  function preventEnterPW(e) {
    if (e.key == "Enter") {
      e.preventDefault();
      checkUser();
    }
  }

  let navigate = useNavigate();
  return (
    <div className={`${style.loginFullDiv}`}>
      {/* <div ref={loginBoxRef} className={`${style.loginBox}`}> */}
      <div
        ref={loginBoxRef}
        className={
          isInViewport
            ? `${style.loginBox} ${style.animation}`
            : `${style.loginBox} ${style.opa_zero}`
        }
      >
        <div className={`${style.leftBox}`}>
          <div className={`${style.iconBox}`}>
            <p>
              <img src={pencil}></img>
            </p>
            <p>
              <img src={thinking}></img>
            </p>
            <p>
              <img src={novel}></img>
            </p>
          </div>
          <div className={`${style.textBox}`}>
            <p>Welcome to Month Mood</p>
            <p>
              Login and start to Write Mood Diary
              <br />
              Have a good time!
            </p>
          </div>
        </div>

        <div className={`${style.rightBox}`}>
          <p className={`${style.loginTitle}`}>Login into MM</p>

          <form className={`${style.loginForm}`}>
            <p>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter your email"
                id="email"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onKeyPress={preventEnter}
              />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                placeholder="Enter your password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyPress={preventEnterPW}
              ></input>
            </p>
            {validShow ? (
              <p className={`${style.showText}`}>Account doesn't exist</p>
            ) : (
              <p className={`${style.hideText}`}>hide</p>
            )}

            <button type="button" onClick={checkUser}>
              Login
            </button>

            <div className={`${style.signUpBox}`}>
              <p>Don't have an account?</p>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className={`${style.accountModal}`}></div>
      </div>
      {loginModalShow ? (
        <AccountModal
          loginModalShow={loginModalShow}
          setLoginModalShow={setLoginModalShow}
        />
      ) : null}
    </div>
  );
};

export default Login;
