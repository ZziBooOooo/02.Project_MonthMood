import React, { useEffect, useState, useRef } from "react";
import style from "../scss/diary.module.scss";
import giphy from "../assets/imgs/giphy.gif";
import b from "../assets/imgs/b.gif";
import c from "../assets/imgs/c.gif";
import p1 from "../assets/imgs/p1.gif";
import p2 from "../assets/imgs/p2.gif";
import p3 from "../assets/imgs/p3.gif";
import n1 from "../assets/imgs/n1.gif";
import n2 from "../assets/imgs/n2.gif";
import n3 from "../assets/imgs/n3.gif";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObsever from "./useIntersectionObsever";

const Diary_Modal = ({
  isShowModal,
  setIsShowModal,
  positiveImg,
  setPositiveImg,
}) => {
  let [HappyCount, setHappyCount] = useState(0);
  let [ExcitedCount, setExcitedCount] = useState(0);
  let [SadCount, setSadCount] = useState(0);
  let [UpsetCount, setUpsetCount] = useState(0);
  let [AngryCount, setAngryCount] = useState(0);
  let [LoveCount, setLoveCount] = useState(0);
  let [monthMood, setMonthMood] = useState("");
  let localData = JSON.parse(window.localStorage.getItem("moodData"));
  let currentDate = new Date();
  let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  let currentMonthData =
    localData && localData.filter((item) => item.date.slice(5, 7) == month);
  const diaryBoxRef = useRef();
  const isInViewport = useIntersectionObsever(diaryBoxRef);

  useEffect(() => {
    setHappyCount(
      currentMonthData &&
        currentMonthData.filter((item) => item.selectValue == "Happy").length
    );
    setExcitedCount(
      currentMonthData &&
        currentMonthData.filter((item) => item.selectValue == "Excited").length
    );
    setSadCount(
      currentMonthData &&
        currentMonthData.filter((item) => item.selectValue == "Sad").length
    );
    setUpsetCount(
      currentMonthData &&
        currentMonthData.filter((item) => item.selectValue == "Upset").length
    );
    setAngryCount(
      currentMonthData &&
        currentMonthData.filter((item) => item.selectValue == "Angry").length
    );
    setLoveCount(
      currentMonthData &&
        currentMonthData.filter((item) => item.selectValue == "Love").length
    );
    let moodArr = [];
    currentMonthData &&
      currentMonthData.forEach((item) => {
        moodArr.push(item.selectValue);
      });
    setMonthMood(getMaxValue(moodArr));
  }, [isShowModal]);

  useEffect(() => {
    if (
      monthMood === "Happy" ||
      monthMood === "Excited" ||
      monthMood === "Love"
    ) {
      setPositiveImg(true);
      console.log("true");
    } else if (
      monthMood === "Sad" ||
      monthMood === "Upset" ||
      monthMood === "Angry"
    ) {
      setPositiveImg(false);
      console.log("false");
    }
  }, [isShowModal]);

  /*   console.log(monthMood);
  console.log(positiveImg); */

  function getMaxValue(array) {
    // 1. 출연 빈도 구하기
    const counts = array.reduce((pv, cv) => {
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
    }, {});

    // 2. 최빈값 구하기
    const keys = Object.keys(counts);
    let mode = keys[0];
    keys.forEach((val, idx) => {
      if (counts[val] > counts[mode]) {
        mode = val;
      }
    });

    return mode;
  }
  function closeModal() {
    setIsShowModal(false);
  }
  return (
    // <div className={`${style.modalBox} ${style.show}`}>
    <div
      ref={diaryBoxRef}
      className={
        isShowModal && isInViewport
          ? `${style.modalBox} ${style.show} ${style.animation}`
          : `${style.modalBox} ${style.opa_zero}`
      }
    >
      <button className={`${style.closeBtn}`} onClick={closeModal}>
        <p>{<FontAwesomeIcon icon={faXmark} />}</p>
      </button>
      <div className={`${style.siteDesimgBox}`}>
        <p className={`${style.gifBox1}`}>
          {positiveImg ? <img src={p1}></img> : <img src={n1}></img>}
        </p>
        <p className={`${style.gifBox2}`}>
          {positiveImg ? <img src={p2}></img> : <img src={n2}></img>}
        </p>
        <p className={`${style.gifBox3}`}>
          {positiveImg ? <img src={p3}></img> : <img src={n3}></img>}
        </p>
      </div>
      <div className={`${style.TitleBox}`}>
        <p className={`${style.moodTitle}`}>{monthMood}</p>
        <p className={`${style.titleDes}`}>You’re Month Mood</p>
      </div>
      <hr />
      <div className={`${style.moodBox}`}>
        <div className={`${style.moodContent}`}>
          <p className={`${style.moodTitle}`}>Happy</p>
          <p className={`${style.moodCount}`}>{HappyCount}</p>
        </div>
        <div className={`${style.moodContent}`}>
          <p className={`${style.moodTitle}`}>Excited</p>
          <p className={`${style.moodCount}`}>{ExcitedCount}</p>
        </div>
        <div className={`${style.moodContent}`}>
          <p className={`${style.moodTitle}`}>Sad</p>
          <p className={`${style.moodCount}`}>{SadCount}</p>
        </div>
        <div className={`${style.moodContent}`}>
          <p className={`${style.moodTitle}`}>Upset</p>
          <p className={`${style.moodCount}`}>{UpsetCount}</p>
        </div>
        <div className={`${style.moodContent}`}>
          <p className={`${style.moodTitle}`}>Angry</p>
          <p className={`${style.moodCount}`}>{AngryCount}</p>
        </div>
        <div className={`${style.moodContent}`}>
          <p className={`${style.moodTitle}`}>Love</p>
          <p className={`${style.moodCount}`}>{LoveCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Diary_Modal;
