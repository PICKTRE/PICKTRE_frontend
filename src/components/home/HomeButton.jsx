import classes from "./HomeButton.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import showProfile from "../../service/showProfile";

const HomeButton = () => {
  // 보상 포인트 상태를 관리하기 위한 useState 훅
  const [point, setPoint] = useState(0);

  // 컴포넌트가 마운트되면 프로필 정보를 가져와서 보상 포인트 업데이트
  useEffect(() => {
    showProfile()
      .then((data) => {
        setPoint(data.data.rewardPoints);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // React Router의 useNavigate 훅을 사용하여 페이지 전환을 처리
  const navigate = useNavigate();

  // '내 활동 리포트' 버튼 클릭 시 이벤트 핸들러
  const onClickActivityReport = () => {
    navigate("/activity-report");
  };

  // '보유 리워드' 버튼 클릭 시 이벤트 핸들러
  const onClickReward = () => {
    alert(`현재 ${point}점을 보유하고 있습니다.`);
  };

  return (
    <>
      {/* 하위 버튼 그룹 컨테이너 */}
      <div className={classes.subButton}>
        {/* '보유 리워드' 버튼 */}
        <div className={classes.currentReward} onClick={onClickReward}>
          보유 리워드
        </div>
        {/* '내 활동 리포트' 버튼 */}
        <div
          className={classes.myActivityReport}
          onClick={onClickActivityReport}
        >
          내 활동 리포트
        </div>
      </div>
    </>
  );
};

export default HomeButton;
