import React, { useContext, useState, useEffect, useRef } from "react";
import style from "../scss/write.module.scss";
import choose from "../assets/imgs/choose.png";
import refresh from "../assets/imgs/refresh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { gifDataContext } from "../stores/GifContext";
import useIntersectionObsever from "./UseIntersectionObsever";
import { current } from "@reduxjs/toolkit";

const Write = () => {
  let [selectValue, setSelectValue] = useState("");
  let [showSelect, setShowSelect] = useState(false);
  let [showFSelect, setShowFSelect] = useState(false);
  let [showBtn, setShowBtn] = useState(false);
  let [sliceArr, setSliceArr] = useState([]);
  let [refreshCount, setrefreshCount] = useState(0);
  let [fullGif, setFullGif] = useState("");
  let [lastClick, setLastClick] = useState({});
  const [currentIdx, setCurrentIdx] = useState(10);
  let navigate = useNavigate();
  let {
    happyData,
    excitedData,
    sadData,
    upsetData,
    angryData,
    loveData,
    randomData,
  } = useContext(gifDataContext);
  // console.log(excitedData);
  const writeBoxRef = useRef();
  const isInViewport = useIntersectionObsever(writeBoxRef);

  function handleSelect(e) {
    setShowSelect(true);
    setSelectValue(e.target.value);
    setCurrentIdx(10);
  }

  useEffect(() => {
    /*     console.log(selectValue);
    console.log(refreshCount); */

    if (selectValue == "Happy" && refreshCount == 0) {
      let copyArr = [...happyData].slice(0, 6);
      setSliceArr(copyArr);
    } else if (selectValue == "Excited" && refreshCount == 0) {
      let copyArr = [...excitedData].slice(0, 6);
      setSliceArr(copyArr);
    } else if (selectValue == "Sad" && refreshCount == 0) {
      let copyArr = [...sadData].slice(0, 6);
      setSliceArr(copyArr);
    } else if (selectValue == "Upset" && refreshCount == 0) {
      let copyArr = [...upsetData].slice(0, 6);
      setSliceArr(copyArr);
    } else if (selectValue == "Angry" && refreshCount == 0) {
      let copyArr = [...angryData].slice(0, 6);
      setSliceArr(copyArr);
    } else if (selectValue == "Love" && refreshCount == 0) {
      let copyArr = [...loveData].slice(0, 6);
      setSliceArr(copyArr);
    } else if (selectValue == "Random" && refreshCount == 0) {
      let copyArr = [...randomData].slice(0, 6);
      setSliceArr(copyArr);
    }

    if (selectValue == "Happy" && refreshCount == 1) {
      let copyArr = [...happyData].slice(6, 12);
      setSliceArr(copyArr);
    } else if (selectValue == "Excited" && refreshCount == 1) {
      let copyArr = [...excitedData].slice(6, 12);
      setSliceArr(copyArr);
    } else if (selectValue == "Sad" && refreshCount == 1) {
      let copyArr = [...sadData].slice(6, 12);
      setSliceArr(copyArr);
    } else if (selectValue == "Upset" && refreshCount == 1) {
      let copyArr = [...upsetData].slice(6, 12);
      setSliceArr(copyArr);
    } else if (selectValue == "Angry" && refreshCount == 1) {
      let copyArr = [...angryData].slice(6, 12);
      setSliceArr(copyArr);
    } else if (selectValue == "Love" && refreshCount == 1) {
      let copyArr = [...loveData].slice(6, 12);
      setSliceArr(copyArr);
    } else if (selectValue == "Random" && refreshCount == 1) {
      let copyArr = [...randomData].slice(6, 12);
      setSliceArr(copyArr);
    }

    if (selectValue == "Happy" && refreshCount == 2) {
      let copyArr = [...happyData].slice(12, 18);
      setSliceArr(copyArr);
    } else if (selectValue == "Excited" && refreshCount == 2) {
      let copyArr = [...excitedData].slice(12, 18);
      setSliceArr(copyArr);
    } else if (selectValue == "Sad" && refreshCount == 2) {
      let copyArr = [...sadData].slice(12, 18);
      setSliceArr(copyArr);
    } else if (selectValue == "Upset" && refreshCount == 2) {
      let copyArr = [...upsetData].slice(12, 18);
      setSliceArr(copyArr);
    } else if (selectValue == "Angry" && refreshCount == 2) {
      let copyArr = [...angryData].slice(12, 18);
      setSliceArr(copyArr);
    } else if (selectValue == "Love" && refreshCount == 2) {
      let copyArr = [...loveData].slice(12, 18);
      setSliceArr(copyArr);
    } else if (selectValue == "Random" && refreshCount == 2) {
      let copyArr = [...randomData].slice(12, 18);
      setSliceArr(copyArr);
    }

    if (selectValue == "Happy" && refreshCount == 3) {
      let copyArr = [...happyData].slice(18, 24);
      setSliceArr(copyArr);
    } else if (selectValue == "Excited" && refreshCount == 3) {
      let copyArr = [...excitedData].slice(18, 24);
      setSliceArr(copyArr);
    } else if (selectValue == "Sad" && refreshCount == 3) {
      let copyArr = [...sadData].slice(18, 24);
      setSliceArr(copyArr);
    } else if (selectValue == "Upset" && refreshCount == 3) {
      let copyArr = [...upsetData].slice(18, 24);
      setSliceArr(copyArr);
    } else if (selectValue == "Angry" && refreshCount == 3) {
      let copyArr = [...angryData].slice(18, 24);
      setSliceArr(copyArr);
    } else if (selectValue == "Love" && refreshCount == 3) {
      let copyArr = [...loveData].slice(18, 24);
      setSliceArr(copyArr);
    } else if (selectValue == "Random" && refreshCount == 3) {
      let copyArr = [...randomData].slice(18, 24);
      setSliceArr(copyArr);
    }

    if (refreshCount == 4) {
      /*       console.log("this");
      console.log(refreshCount); */
      setrefreshCount(0);
    }
  }, [selectValue, refreshCount]);

  function showFullGif(id) {
    setFullGif(sliceArr.filter((item) => item.id === id));
    // console.log(fullGif);
  }

  function refreshGif() {
    setrefreshCount(refreshCount + 1);
    setCurrentIdx(10);
  }

  /* 
    function saveImg(item) {
    let value = [{ selectValue, item }];
    let getItem = JSON.parse(window.localStorage.getItem("Datas"));

    // window.localStorage.setItem("Datas", JSON.stringify(value));

    let a = [...getItem, ...value];
    window.localStorage.setItem("Datas", [JSON.stringify(a)]);
  } 
  */

  function lastClicks(item, gifId) {
    /*     console.log(item);
    console.log(selectValue); */
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let date = year + "-" + month + "-" + day;
    let localData = JSON.parse(window.localStorage.getItem("moodData"));
    // console.log(localData);
    if (localData) {
      let count = localData.length;
      setLastClick({ gifId, count, date, selectValue, item });
    } else if (!localData) {
      setLastClick({ gifId, count: 0, date, selectValue, item });
    }
  }

  function saveLastClick() {
    // state lastClick에 들어있는 값을 로컬스토리지에 저장
    /*     console.log(lastClick);
    console.log("실행"); */

    let localData = JSON.parse(window.localStorage.getItem("moodData"));
    if (localData) {
      let newData = [...localData];
      newData.push(lastClick);
      window.localStorage.setItem("moodData", JSON.stringify(newData));
    } else if (!localData) {
      window.localStorage.setItem("moodData", JSON.stringify([lastClick]));
    }
  }

  let [fade, setFade] = useState("");
  let [fade2, setFade2] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [selectValue, refreshCount]);
  useEffect(() => {
    setTimeout(() => {
      setFade2("end2");
    }, 100);

    return () => {
      setFade2("");
    };
  }, [lastClick]);

  function setImgCheck(itemId, idx) {
    sliceArr.filter((item) => {
      if (item.id == itemId) {
        setCurrentIdx(idx);
      }
    });
  }
  return (
    <div className={`${style.writeFullDiv}`}>
      <div className={`${style.logoBox}`}>
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          MONTH
          <br /> MOOD
        </p>
      </div>
      <div
        ref={writeBoxRef}
        className={
          isInViewport
            ? `${style.writeBox} ${style.animation}`
            : `${style.writeBox} ${style.opa_zero}`
        }
      >
        <div className={`${style.leftBox}`}>
          <p className={`${style.title}`}>Choose Today's Mood</p>
          <div className={`${style.btnAndSelect}`}>
            <select name="mood" id="moodselect" onChange={handleSelect}>
              <option value="none">Select!</option>
              <option value="Happy">Happy</option>
              <option value="Excited">Excited</option>
              <option value="Sad">Sad</option>
              <option value="Upset">Upset</option>
              <option value="Angry">Angry</option>
              <option value="Love">Love</option>
              <option value="Random">Random</option>
            </select>
            {showSelect ? (
              <img
                src={refresh}
                className={`${style.refresh}`}
                onClick={refreshGif}
              ></img>
            ) : null}
          </div>
          {showSelect ? (
            <div className={`${style.gifBox}`}>
              {sliceArr.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    // className={`${style.start} ${style[fade]}`}
                    className={
                      idx == currentIdx
                        ? `${style.start} ${style.checkOn} ${style[fade]}`
                        : `${style.start} ${style[fade]}`
                    }
                    onClick={() => {
                      setImgCheck(item.id, idx);
                    }}
                  >
                    <img
                      src={item.images.fixed_width_downsampled.url}
                      onClick={() => {
                        showFullGif(item.id);
                        setShowFSelect(true);
                        setShowBtn(true);
                        lastClicks(
                          item.images.fixed_width_downsampled.url,
                          item.id
                        );
                      }}
                    ></img>
                  </p>
                );
              })}
            </div>
          ) : (
            <div className={`${style.nullBox} `}>
              <p className={`${style.selectText}`}>How was your day?</p>
              <p className={`${style.selectText2}`}>Please choose your mood</p>
            </div>
          )}
        </div>
        <div className={`${style.rightBox}`}>
          {showFSelect ? (
            <div className={`${style.rightCardBox}`}>
              <p className={`${style.fullGifBox} `}>
                {/* <img src={fullGif[0].images.downsized_medium.url}></img> */}
                <img
                  src={fullGif[0].images.fixed_height.url}
                  className={`${style.start2} ${style[fade2]}`}
                ></img>
              </p>
              <div className={`${style.fullTextBox}`}>
                <p className={`${style.start2} ${style[fade2]}`}>
                  {fullGif[0].title}
                </p>
                <p
                  className={`${style.selectText} ${style.start2} ${style[fade2]}`}
                >
                  {selectValue}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        {showBtn ? (
          <button
            onClick={() => {
              navigate("/title");
              saveLastClick();
            }}
          >
            <span>Continue</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Write;
