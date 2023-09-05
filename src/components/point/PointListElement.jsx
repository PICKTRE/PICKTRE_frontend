import classes from "./PointListElement.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const places = [
  "동성로 2.28 공원",
  "대구 중구청",
  "반월당 13번 출구",
  "반월당 지하상가",
  "동성로 스파크",
];
const randomIndex = Math.floor(Math.random() * places.length);

const PointListElement = () => {
  const [pointData, setPointData] = useState([]);
  const msrl = localStorage.getItem("memberId");

  useEffect(() => {
    // 포인트 데이터를 API로부터 가져오는 요청
    axios
      .get(`${BASE_URL}/reward-transactions/${msrl}`)
      .then((response) => {
        console.log(response.data.list);
        setPointData(response.data.list);
      })
      .catch((error) => {
        // API 요청이 실패한 경우 오류 로깅
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <>
      {pointData.map((data, index) => (
        <div key={index} className={classes.pointListElement}>
          {/* 거래 일자 표시 */}
          <div className={classes.date}>
            {data.transactionDate[1]}.{data.transactionDate[2]}
          </div>
          <div className={classes.textSection}>
            <div className={classes.mainText}>
              {/* 포인트 거래 내용 표시 */}
              {data.points < 0
                ? `${data.productName} ${data.productCount}개 구매`
                : `${data.productName} ${data.productCount}개 반납`}
            </div>
            <div className={classes.subText}>
              {/* 포인트 적립 시 장소 표시 */}
              {data.points < 0 ? "" : places[randomIndex]}
            </div>
          </div>
          <div
            className={`${classes.point} ${
              data.points < 0 ? classes.negativePoints : ""
            }`}
          >
            {/* 포인트 양수, 음수에 따른 스타일 및 표시 */}
            {data.points}P
          </div>
        </div>
      ))}
    </>
  );
};

// 프롭 타입 정의
PointListElement.propTypes = {
  pointData: PropTypes.node.isRequired,
};

export default PointListElement;
