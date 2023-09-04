import Ranker from "./Ranker";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

const RankingList = () => {
  const [rankingData, setRankingData] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/members`) // GET 요청 보내기
      .then((response) => {
        // 'trashCount'에 대한 내림차순 정렬
        const sortedData = response.data.list.sort(
          (a, b) => b.trashCount - a.trashCount
        );
        setRankingData(sortedData);
      })
      .catch((error) => {
        // API 요청이 실패한 경우
        console.error("API 요청 실패:", error);
      });
  }, []);
  return (
    <>
      {rankingData.map((data, index) => (
        <Ranker
          key={index}
          rank={index + 1}
          name={data.username}
          count={data.trashCount}
        />
      ))}
    </>
  );
};

export default RankingList;
