import classes from "./PointListElement.module.css";
import PropTypes from "prop-types";
// import pointData from "./dummy/pointData.json";
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
    axios
      .get(`${BASE_URL}/reward-transactions/${msrl}`) // GET 요청 보내기
      .then((response) => {
        console.log(response.data.list);
        setPointData(response.data.list);
      })
      .catch((error) => {
        // API 요청이 실패한 경우
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <>
      {pointData.map((data, index) => (
        <div key={index} className={classes.pointListElement}>
          <div className={classes.date}>
            {data.transactionDate[1]}.{data.transactionDate[2]}
          </div>
          <div className={classes.textSection}>
            <div className={classes.mainText}>
              {data.points < 0
                ? `${data.productName} ${data.productCount}개 구매`
                : `${data.productName} ${data.productCount}개 반납`}
            </div>
            <div className={classes.subText}>
              {data.points < 0 ? "" : places[randomIndex]}
            </div>
          </div>
          <div
            className={`${classes.point} ${
              data.points < 0 ? classes.negativePoints : ""
            }`}
          >
            {data.points}P
          </div>
        </div>
      ))}
    </>
  );
};

PointListElement.propsTypes = {
  pointData: PropTypes.node.isRequired,
};

export default PointListElement;
