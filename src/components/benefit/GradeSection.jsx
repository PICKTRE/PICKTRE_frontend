import classes from "./GradeSection.module.css";
import tier1 from "../../assets/tier1.png";
import tier2 from "../../assets/tier2.png";
import tier3 from "../../assets/tier3.png";
import tier4 from "../../assets/tier4.png";
import tier5 from "../../assets/tier5.png";
import tier_imgClick from "../../assets/tier_imgClick.png";
import { useState } from "react";

const GradeSection = () => {
  const [clickedTier, setClickedTier] = useState(false);

  const handleTierClick = (tier) => {
    setClickedTier(tier);
  };

  const getExplanationText = () => {
    switch (clickedTier) {
      case "tier1":
        return "누적 50,000P 이상";
      case "tier2":
        return "누적 20,000P 이상";
      case "tier3":
        return "누적 7,000P 이상";
      case "tier4":
        return "누적 4,000P 이상";
      case "tier5":
        return "누적 0P 이상";
      default:
        return "등급기준이 표시됩니다.";
    }
  };

  return (
    <>
      <div className={classes.TierSection}>
        <ul className={classes.Tier}>
          <li
            className={classes.TierList}
            onClick={() => handleTierClick("tier1")}
          >
            {clickedTier === "tier1" && (
              <img
                src={tier_imgClick}
                alt="클릭된 이미지입니다."
                className={classes.clickedImage1}
              />
            )}
            <img
              src={tier1}
              alt="티어이미지입니다."
              className={classes.tierImg}
            />
            <p>TIER1 슈퍼몽</p>{" "}
          </li>
          <li
            className={classes.TierList}
            onClick={() => handleTierClick("tier2")}
          >
            {clickedTier === "tier2" && (
              <img
                src={tier_imgClick}
                alt="클릭된 이미지입니다."
                className={classes.clickedImage2}
              />
            )}
            <img
              src={tier2}
              alt="티어이미지입니다."
              className={classes.tierImg}
            />
            <p>TIER2 파워몽</p>{" "}
          </li>
          <li
            className={classes.TierList}
            onClick={() => handleTierClick("tier3")}
          >
            {clickedTier === "tier3" && (
              <img
                src={tier_imgClick}
                alt="클릭된 이미지입니다."
                className={classes.clickedImage3}
              />
            )}
            <img
              src={tier3}
              alt="티어이미지입니다."
              className={classes.tierImg}
            />
            <p>TIER3 골드몽</p>{" "}
          </li>
          <li
            className={classes.TierList}
            onClick={() => handleTierClick("tier4")}
          >
            {clickedTier === "tier4" && (
              <img
                src={tier_imgClick}
                alt="클릭된 이미지입니다."
                className={classes.clickedImage4}
              />
            )}
            <img
              src={tier4}
              alt="티어이미지입니다."
              className={classes.tierImg}
            />
            <p>TIER4 실버몽</p>{" "}
          </li>
          <li
            className={classes.TierLists}
            onClick={() => handleTierClick("tier5")}
          >
            {clickedTier === "tier5" && (
              <img
                src={tier_imgClick}
                alt="클릭된 이미지입니다."
                className={classes.clickedImage5}
              />
            )}
            <img
              src={tier5}
              alt="티어이미지입니다."
              className={classes.tierImg}
            />
            <p>TIER5 루키몽</p>{" "}
          </li>
        </ul>
      </div>
      <div className={classes.explainSection}>
        <h3>등급기준</h3>
        <p>{getExplanationText()}</p>
      </div>
    </>
  );
};
export default GradeSection;
