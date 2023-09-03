import classes from "./HomeButton.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import showProfile from "../../service/showProfile";

const HomeButton = () => {
  const [point, setPoint] = useState(0);

  useEffect(() => {
    showProfile()
      .then((data) => {
        setPoint(data.data.rewardPoints);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const onClickActivityReport = () => {
    navigate("/activity-report");
  };
  const onClickReward = () => {
    alert(`현재 ${point}점을 보유하고 있습니다.`);
  };

  return (
    <>
      <div className={classes.subButton}>
        <div className={classes.currentReward} onClick={onClickReward}>
          보유 리워드
        </div>
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
