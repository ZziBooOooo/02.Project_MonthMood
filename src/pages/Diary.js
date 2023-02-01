import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import style from "../scss/diary.module.scss";
import Diary_Modal from "./Diary_Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Diary = () => {
  const [mmData, setMMData] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [positiveImg, setPositiveImg] = useState("");
  let navigate = useNavigate();
  let localData = JSON.parse(window.localStorage.getItem("moodData"));

  // 월 선택전 처음 접속시 실행
  useEffect(() => {
    let currentDate = new Date();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    setCurrentMonth(month);
    setMMData(
      localData && localData.filter((item) => item.date.slice(5, 7) == month)
    );
  }, []);

  // 월 선택시 데이터 필터링 & 표시
  function changeMonth(e) {
    let selectMonth = e.target.value;
    let selectData =
      localData &&
      localData.filter((item) => item.date.slice(5, 7) == selectMonth);
    setMMData(selectData);
  }

  function removeData(e) {
    // console.log(mmData);
    let removeItemId = e.target.parentElement.parentElement.parentElement.id;
    let noRemoveItem = mmData.filter((item) => item.gifId != removeItemId);
    console.log(removeItemId);
    console.log(noRemoveItem);

    setMMData(noRemoveItem);
  }
  useEffect(() => {
    window.localStorage.setItem("moodData", JSON.stringify(mmData));
  }, [mmData]);

  function showModal() {
    setIsShowModal(true);
  }
  return (
    <>
      <div className={`${style.fullModalBox}`}></div>
      <Header />
      <div className={`${style.FullDiv} ${style.bgOpacity}`}>
        <div className={`${style.diaryBox}`}>
          <div className={`${style.diaryTopBox}`}>
            <select
              name="mood"
              id="moodselect"
              onChange={changeMonth}
              defaultValue="2023-01"
            >
              <option value="01">2023-01</option>
              <option value="02">2023-02</option>
              <option value="03">2023-03</option>
              <option value="04">2023-04</option>
              <option value="05">2023-05</option>
              <option value="06">2023-06</option>
              <option value="07">2023-07</option>
              <option value="08">2023-08</option>
              <option value="09">2023-09</option>
              <option value="10">2023-10</option>
              <option value="11">2023-11</option>
              <option value="12">2023-12</option>
            </select>
            <button onClick={showModal}>
              MY MM
              <p>{<FontAwesomeIcon icon={faHeart} />}</p>
            </button>
          </div>

          <div className={`${style.diaryContentBox}`}>
            {mmData ? (
              mmData.map((content) => {
                return (
                  <div
                    className={`${style.contentBox}`}
                    key={content.gifId}
                    id={content.gifId}
                  >
                    <div className={`${style.imgBox}`}>
                      <img src={content.item}></img>
                      <div className={`${style.hoverBox}`}>
                        <button
                          className={`${style.closeBtn}`}
                          onClick={removeData}
                        >
                          x
                        </button>
                        <p className={`${style.title}`}>{content.title}</p>
                      </div>
                    </div>
                    <div className={`${style.textBox}`}>
                      <p className={`${style.date}`}>{content.date}</p>
                      <p className={`${style.mood}`}>{content.selectValue}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className={`${style.test}`}>
                Data does not exist. <br /> Start MonthMood!
              </p>
            )}

            {mmData && mmData.length == 0 ? (
              <p className={`${style.test}`}>
                Data does not exist. <br /> Start MonthMood!
              </p>
            ) : null}
          </div>

          <Diary_Modal
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
            positiveImg={positiveImg}
            setPositiveImg={setPositiveImg}
          />
        </div>
      </div>
    </>
  );
};

export default Diary;
