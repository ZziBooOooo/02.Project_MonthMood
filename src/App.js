import style from "./scss/App.module.scss";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Write from "./pages/Write";
import Title from "./pages/Title";
import Diary from "./pages/Diary";
import Trend from "./pages/Trend";
import AnimatedCursor from "react-animated-cursor";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export let ContextGifData = createContext();

function App() {
  const [happyData, setHappyData] = useState([]);
  const [excitedData, setExcitedData] = useState([]);
  const [sadData, setSadData] = useState([]);
  const [upsetData, setUpsetData] = useState([]);
  const [angryData, setAngryData] = useState([]);
  const [loveData, setLoveData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [test, setTest] = useState("");

  /* 노트북 기준 화면 -> 세로 사이즈 다시 적용 */

  useEffect(() => {
    let n = Math.floor(Math.random() * 401);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&q=happy&limit=24&offset=${n}&rating=pg&lang=en`
      )
      .then((result) => {
        setHappyData([...happyData, ...result.data.data]);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&q=excited&limit=24&offset=${n}&rating=pg&lang=en`
      )
      .then((result) => {
        setExcitedData([...excitedData, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&q=sad&limit=24&offset=${n}&rating=pg&lang=ko`
      )
      .then((result) => {
        setSadData([...sadData, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&q=upset&limit=24&offset=${n}&rating=pg&lang=ko`
      )
      .then((result) => {
        setUpsetData([...upsetData, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&q=angry&limit=24&offset=${n}&rating=pg&lang=ko`
      )
      .then((result) => {
        setAngryData([...angryData, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&q=love&limit=24&offset=${n}&rating=pg&lang=ko`
      )
      .then((result) => {
        setLoveData([...loveData, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&q=reaction&limit=24&offset=${n}&rating=pg&lang=en`
      )
      .then((result) => {
        setRandomData([...randomData, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&limit=30&rating=pg`
      )
      .then((result) => {
        setTrendData([...trendData, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
  }, []);

  return (
    <ContextGifData.Provider
      value={{
        happyData,
        excitedData,
        sadData,
        upsetData,
        angryData,
        loveData,
        randomData,
        trendData,
        test,
        setTest,
      }}
    >
      <div className={`${style.App}`}>
        <AnimatedCursor
          innerSize={20}
          outerSize={12}
          color="227, 205, 247"
          outerAlpha={0.2}
          innerScale={1}
          outerScale={5}
          trailingSpeed={7}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/write" element={<Write />} />
          <Route path="/title" element={<Title />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </ContextGifData.Provider>
  );
}

export default App;
