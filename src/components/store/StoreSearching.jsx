import classes from "./StoreSearching.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const StoreSearching = () => {
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);

  useEffect(() => {
    showProfile()
      .then((data) => {
        setName(data.data.username);
        setPoint(data.data.rewardPoints);
        // console.log("Data loaded:", data.data.rewardPoints, data.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* 검색 엔진 및 검색 바 */}
      <div className={classes.searching}>
        <div className={classes.searchingTitle}>
          <input
            type="text"
            placeholder="검색하실 제품을 입력해주세요"
            className={classes.searchEngine}
          />
        </div>
        <div className={classes.searchingBar}>
          추천 인기 제품
          <IoIosArrowDown size="14" color="#ffffff" />
          1. PICKTRE SPRING NOTE
        </div>
      </div>

      {/* 현재 포인트 표시 */}
      <div className={classes.currentPoint}>
        {name}님,
        <br />
        현재 보유포인트
        <br />
        <p>{point}P</p>
      </div>
    </>
  );
};

export default StoreSearching;
