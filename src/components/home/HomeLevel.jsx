import classes from "./HomeLevel.module.css";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const HomeLevel = () => {
  // 포인트 상태 변수 초기화
  const [point, setPoint] = useState(0);

  useEffect(() => {
    // 포인트 데이터를 가져와 포인트 상태 변수 업데이트
    showProfile()
      .then((data) => {
        setPoint(data.data.rewardPoints);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 현재 레벨 백분율을 계산하는 함수
  const calculateCurrentLevelPercentage = (point) => {
    if (point <= 100) return point;
    if (point <= 4000) return (point - 100) / 100;
    if (point <= 7000) return (point - 4000) / 100;
    if (point <= 20000) return (point - 7000) / 100;
    if (point <= 50000) return (point - 20000) / 100;
    return 100;
  };

  // 현재 레벨 백분율 계산 결과
  const levelPercentage = calculateCurrentLevelPercentage(point);

  return (
    <div className={classes.levelSectionWrapper}>
      {/* "LEVEL" 텍스트 표시 */}
      <span className={classes.levelCharacter}>LEVEL</span>
      {/* 레벨 표시 영역 */}
      <div className={classes.levelSection}>
        {/* 레벨 색상 영역 */}
        <div className={classes.levelColorSection}>
          {/* 레벨 백분율에 따라 그라데이션 색상 영역의 너비를 동적으로 조절 */}
          <div
            className={classes.levelGradationColorSection}
            style={{ width: `${levelPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeLevel;
