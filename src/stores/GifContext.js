import { createContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const GifDataContext = (props) => {
  const [happyData, setHappyData] = useState([]);
  const [excitedData, setExcitedData] = useState([]);
  const [sadData, setSadData] = useState([]);
  const [upsetData, setUpsetData] = useState([]);
  const [angryData, setAngryData] = useState([]);
  const [loveData, setLoveData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [trendData1, setTrendData1] = useState([]);
  const [currentMenu, setCurrentMenu] = useState("");
  const [dark, setDark] = useState(true);

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
        setTrendData1([...trendData1, ...result.data.data]);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
  }, []);

  return (
    <gifDataContext.Provider
      value={{
        happyData,
        excitedData,
        sadData,
        upsetData,
        angryData,
        loveData,
        randomData,
        trendData1,
        currentMenu,
        setCurrentMenu,
      }}
    >
      {props.children}
    </gifDataContext.Provider>
  );
};

export const gifDataContext = createContext();
export default GifDataContext;
