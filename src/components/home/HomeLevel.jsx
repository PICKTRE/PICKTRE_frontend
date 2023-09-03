import classes from "./HomeLevel.module.css";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const HomeLevel = () => {
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

  const calculateCurrentLevelPercentage = (point) => {
    if (point <= 100) return point;
    if (point <= 4000) return (point - 100) / 100;
    if (point <= 7000) return (point - 4000) / 100;
    if (point <= 20000) return (point - 7000) / 100;
    if (point <= 50000) return (point - 20000) / 100;
    return 100;
  };

  const levelPercentage = calculateCurrentLevelPercentage(point);

  return (
    <div className={classes.levelSectionWrapper}>
      <span className={classes.levelCharacter}>LEVEL</span>
      <div className={classes.levelSection}>
        <div className={classes.levelColorSection}>
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
