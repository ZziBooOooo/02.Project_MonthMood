import React, { useContext, useState, useEffect } from "react";
import style from "../scss/title.module.scss";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Title = () => {
  let navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [alertOn, setAlertOn] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setIsComplete(true);
    } else if (!inputValue) {
      setIsComplete(false);
    }
  }, [inputValue]);
  function saveTitle() {
    let beforeData = JSON.parse(window.localStorage.getItem("moodData"));
    let num = beforeData.length - 1;
    beforeData[num].title = inputValue;

    // console.log(beforeData);
    // let test = [{ ...beforeData, inputValue }];
    // console.log(test);
    window.localStorage.setItem("moodData", JSON.stringify(beforeData));
  }

  function setCharLimit(e) {
    // console.log(char);
    if (e.target.value.length >= 30) {
      console.log(e);

      setAlertOn(true);
    } else {
      setAlertOn(false);
    }
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
      <div className={`${style.writeBox}`}>
        <p className={`${style.title}`}>Write Today's Title</p>

        <form
          className={`${style.form}`}
          onSubmit={() => {
            navigate("/diary");
            saveTitle();
          }}
        >
          <input
            type="text"
            name="text"
            value={inputValue}
            autoComplete="off"
            required
            onChange={(e) => {
              setInputValue(e.target.value);
              setCharLimit(e);
            }}
          />
          <label htmlFor="text" className={`${style.label_name}`}>
            <span className={`${style.content_name}`}>Your Title</span>
          </label>
        </form>
        <p
          className={
            alertOn ? `${style.alertMsg} ${style.on}` : `${style.alertMsg}`
          }
        >
          Please write within 30 characters
        </p>

        {isComplete ? (
          <button
            onClick={() => {
              navigate("/diary");
              saveTitle();
            }}
          >
            <span>Continue</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Title;
