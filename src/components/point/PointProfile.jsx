import classes from "./PointProfile.module.css";
import mascot from "../../assets/mascot.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const PointProfile = () => {
  const [userName, setUserName] = useState("");
  const [rewardPoint, setRewardPoint] = useState("");
  const [trashCount, setTrashCount] = useState(0);
  const [todayReward, setTodayReward] = useState(0);
  const navigate = useNavigate();

  // 활동 리포트 페이지로 이동하는 함수
  const onClickActivityReport = () => {
    navigate("/activity-report");
  };

  const msrl = localStorage.getItem("memberId");
  useEffect(() => {
    // 사용자 정보를 API로부터 가져오는 요청
    axios
      .get(`${BASE_URL}/members/${msrl}`)
      .then((response) => {
        // API 요청이 성공한 경우
        setUserName(response.data.data.username);
        setTrashCount(response.data.data.trashCount);
        setRewardPoint(response.data.data.rewardPoints);
        setTodayReward(response.data.data.todayReward);
      })
      .catch((error) => {
        // API 요청이 실패한 경우 오류 로깅
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <>
      <div className={classes.profileBox}>
        <div className={classes.profileTopSection}>
          <div className={classes.textSection}>
            <span>
              {/* 사용자 이름 및 반납한 쓰레기 수 표시 */}
              <strong className={classes.boldText}>{userName}</strong>
              님,
              <br />
            </span>
            <span>
              <strong className={classes.boldText}>{trashCount}개</strong>
              의 쓰레기를 반납했어요.
              <br />
            </span>
            <span>
              {/* 오늘의 포인트 변동 표시 */}
              <strong className={classes.boldText}>
                오늘 총 {todayReward.toLocaleString()}포인트
              </strong>
              의
            </span>
            <span>변동이 있어요.</span>
          </div>
          <div className={classes.mascotSection}>
            {/* 마스코트 이미지 표시 */}
            <img src={mascot} alt="mascot" className={classes.mascot} />
          </div>
        </div>
        <div className={classes.profileBottomSection}>
          <div className={classes.currentPoint}>
            {/* 보유 포인트 표시 */}
            보유 포인트: {rewardPoint.toLocaleString()}P
          </div>
          <div
            className={classes.myActivityReport}
            onClick={onClickActivityReport}
          >
            {/* 활동 리포트 버튼 */}내 활동 리포트
          </div>
        </div>
      </div>
    </>
  );
};

export default PointProfile;
