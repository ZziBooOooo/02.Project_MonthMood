import React, { useContext } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../scss/Main.module.scss";
import giphy from "../assets/imgs/giphy.gif";
import b from "../assets/imgs/b.gif";
import c from "../assets/imgs/c.gif";
import d from "../assets/imgs/d.gif";
import e from "../assets/imgs/e.jpg";
import f from "../assets/imgs/f.png";
import h from "../assets/imgs/h.jpg";
import write from "../assets/imgs/write.png";
import choose from "../assets/imgs/choose.png";
import complete from "../assets/imgs/complete.png";

import { createContext, useEffect, useState } from "react";
import { ContextGifData } from "./../App";

const Main = () => {
  let navigate = useNavigate();
  let { happyData, excitedData, sadData, upsetData, angryData, loveData } =
    useContext(ContextGifData);

  // console.log(happyData);
  return (
    <>
      <div className={`${style.FullContentBox}`}>
        <Header />
        <div className={`${style.mainTitleBox}`}>
          <p>HOW YOU FEEL DURING</p>
          <p> THE MONTH</p>
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
            <div>
              <p className={`${style.readyTxt}`}>Ready?</p>
              <p className={`${style.goTxt}`}> Let's Go!</p>
            </div>
          </button>
        </div>

        <div className={`${style.siteDesBox}`}>
          <div className={`${style.siteDes_pBox}`}>
            <div>
              <p>What is </p>
              <p>Month Mood?</p>
            </div>

            <p className={`${style.siteDes_p2Box}`}>
              MonthMood is a diary to record my mood for a month. Have a healthy
              mind while managing your mood.
            </p>
          </div>
          <div className={`${style.siteDesimgBox}`}>
            <p className={`${style.gifBox1}`}>
              <img src={giphy}></img>
            </p>
            <p className={`${style.gifBox2}`}>
              <img src={b}></img>
            </p>
            <p className={`${style.gifBox3}`}>
              <img src={c}></img>
            </p>
            <p className={`${style.gifBox4}`}>
              <img src={d}></img>
            </p>
          </div>
        </div>

        <div className={`${style.howUseBox}`}>
          <p className={`${style.howUseTitle}`}>
            How to <span>use?</span>
          </p>
          <div className={`${style.howUseContentBox}`}>
            <div className={`${style.howUseBox}`}>
              <div className={`${style.howUseImgBox}`}>
                <img src={e}></img>
                <img src={choose}></img>
              </div>
              <p>Choose GIF</p>
              <p>
                Choose a gif that fits
                <br /> your mood for the day
              </p>
            </div>
            <div className={`${style.howUseBox}`}>
              <div className={`${style.howUseImgBox}`}>
                <img src={f}></img>
                <img src={write}></img>
              </div>
              <p>Write Title</p>
              <p>
                Write a simple title
                <br /> summarizing your day
              </p>
            </div>
            <div className={`${style.howUseBox}`}>
              <div className={`${style.howUseImgBox}`}>
                <img src={h}></img>
                <img src={complete}></img>
              </div>
              <p>Complete</p>
              <p>
                Done! Don't forget to look
                <br /> at your monthly stats
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Main;
