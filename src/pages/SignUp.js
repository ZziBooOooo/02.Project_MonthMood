import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import style from "../scss/login.module.scss";
import pencil from "../assets/imgs/pencil.png";
import thinking from "../assets/imgs/thinking.png";
import novel from "../assets/imgs/novel.png";
import AccountModal from "./AccountModal";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [validShow, setValidShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  let value;

  function saveUser() {
    if (id && password && id.length >= 5 && password.length >= 5) {
      value = { id, password };
      setAllUser([...allUser, value]);
      setValidShow(false);
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

    if (id.length < 5 || password.length < 5) {
      setValidShow(true);
    }
  }

  useEffect(() => {
    console.log(user);
    console.log(allUser);
    if (allUser && Object.keys(allUser).length !== 0) {
      window.localStorage.setItem("Alluser", JSON.stringify(allUser));
    }
  }, [user, allUser]);

  function preventEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  function preventEnterPW(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      saveUser();
    }
  }

  let navigate = useNavigate();
  return (
    <div className={`${style.loginFullDiv}`}>
      <div className={`${style.loginBox}`}>
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
          <p className={`${style.loginTitle}`}>SignUp into MM</p>

          <form
            className={`${style.loginForm}`}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter your email"
                id="email"
                type="email"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onKeyPress={preventEnter}
              ></input>
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
              <p className={`${style.showText}`}>Please enter at least 5</p>
            ) : (
              <p className={`${style.hideText}`}>hide</p>
            )}
            <button type="button" onClick={saveUser}>
              Sign up
            </button>

            <div className={`${style.signUpBox}`}>
              <p>Do you have account?</p>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
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

export default SignUp;
