import Ranker from "./Ranker";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

const RankingList = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    // 서버로부터 사용자 랭킹 데이터를 가져오는 효과적인 방법입니다.
    axios
      .get(`${BASE_URL}/members`) // 서버로 GET 요청을 보냅니다.
      .then((response) => {
        // 받아온 데이터를 'trashCount' 필드를 기준으로 내림차순으로 정렬합니다.
        const sortedData = response.data.list.sort(
          (a, b) => b.trashCount - a.trashCount
        );
        // 정렬된 데이터를 상태에 설정합니다.
        setRankingData(sortedData);
      })
      .catch((error) => {
        // API 요청이 실패한 경우 에러를 콘솔에 기록합니다.
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <>
      {/* 랭킹 데이터를 매핑하여 `Ranker` 컴포넌트를 생성합니다. */}
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
