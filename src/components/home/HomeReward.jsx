import classes from "./HomeReward.module.css";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const HomeReward = () => {
  // 사용자 정보 및 리워드 상태 변수 초기화
  const [name, setName] = useState("");
  const [todayReward, setTodayReward] = useState(0);
  const [tierImg, setTierImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 사용자 프로필 데이터를 가져와 상태 변수 업데이트
    showProfile()
      .then((data) => {
        setName(data.data.username);
        setTodayReward(data.data.todayReward);
        setTierImg(data.data.tierPath);
        setIsLoading(false);
        // console.log("Data loaded:", data.data.rewardPoints, data.data.username);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes.rewardSection}>
      <div className={classes.rewardInfoSection}>
        <ul className={classes.rewardInfo}>
          {/* 사용자 환영 메시지 표시 */}
          <li className={classes.rewardInfoText}>
            안녕하세요 <br />
            {name}님, 반갑습니다. <br /> <br />
          </li>
          {/* 오늘 리워드 정보 표시 */}
          <li>
            오늘 하루동안 <br />
            <b>리워드 {todayReward}점</b> 모았어요!
          </li>
        </ul>
        {/* 리워드 티어 이미지 표시 */}
        <div className={classes.rewardTier}>
          {isLoading ? (
            <div className={classes.rewardTierImg} />
          ) : (
            <img
              src={tierImg}
              alt="티어이미지입니다."
              className={classes.rewardTierImgs}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeReward;
