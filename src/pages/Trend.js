import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import style from "../scss/trend.module.scss";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GifDiv = styled.div`
  width: 30%;
  max-width: 300px;
  height: 400px;
  background: ${(props) =>
    props.color || "linear-gradient(30deg, #ec63da, #783db6);"};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
  margin-bottom: 8%;
`;

const Trend = () => {
  // let { trendData } = useContext(ContextGifData);
  let navigate = useNavigate();
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [test, setTest] = useState(1);
  let [fadeOn, setFadeOn] = useState("");

  let boxColor = [
    "#FAC642",
    "#9E42FA",
    "#ACE337",
    "#FA42B0",
    "#4BC6E1",
    "#FA6342",
  ];

  // 색깔이 6개 ->  받아온 데이터 개수를 같게해서 반복문으로 각각 다른 색을 넣음
  function addColor(arr) {
    arr.map((item, key) => {
      return (item.color = boxColor[key]);
    });
  }

  let arr1 = trendData && trendData.slice(0, 6);
  addColor(arr1);

  const axiosData = async () => {
    setLoading(true);

    await axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&limit=6&offset=0&rating=pg-13`
      )
      .then((result) => {
        setTrendData([...trendData, ...result.data.data]);
        addColor(trendData);
        // console.log(result);
      })
      .catch(() => {
        console.log("요청 실패");
      });
    setLoading(false);
  };

  useEffect(() => {
    axiosData();
    setTimeout(() => {
      setFadeOn("endOpacity");
    }, 300);

    return () => setFadeOn("");
  }, []);

  const axiosMoreData = async (n) => {
    // 추가 데이터를 로드하는 상태로 전환
    setFetching(true);

    // API로부터 받아온 페이징 데이터를 이용해 다음 데이터를 로드
    await axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=DWM8KhnNr7CqIgyFFGFvTV03fooZYde2&limit=6&offset=${
          n * 6
        }&rating=pg-13`
      )
      .then((response) => {
        console.log(fadeOn);
        const fetchedData = response.data.data;
        // 기존 데이터 배열과 새로 받아온 데이터 배열을 합쳐 새 배열을 만들고 state에 저장한다.
        const mergedData = trendData.concat(...fetchedData);
        setTrendData(mergedData);
        addColor(fetchedData);
      });
    // 추가 데이터 로드 끝
    setFetching(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      setTest(test + 1);
      let n = 1 * test;
      axiosMoreData(n);
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Header />
      <div className={`${style.writeFullDiv}`}>
        <div className={`${style.trendBox}`}>
          <div className={`${style.trendContentBox}`}>
            <p className={`${style.trendTitle}`}>Trending 🔥</p>
            <div className={`${style.gifContentBox}`}>
              {trendData &&
                trendData.map((item, key) => {
                  return (
                    <GifDiv
                      color={item.color}
                      key={key}
                      className={
                        Number(key - 1) % 3 === 0
                          ? `${style.startOpacity} ${style.on} ${style[fadeOn]}`
                          : `${style.startOpacity} ${style[fadeOn]}`
                      }
                    >
                      <div className={`${style.gifBox}`}>
                        <img
                          src={item.images.fixed_height_downsampled.url}
                          alt="imageUrl"
                        ></img>
                        <p>{item.title}</p>
                      </div>
                      <a
                        href={item.images.fixed_height_downsampled.url}
                        className={`${style.btnBox}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Save</button>
                      </a>
                    </GifDiv>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trend;
