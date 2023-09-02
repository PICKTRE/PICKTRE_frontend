import classes from "./BenefitSection.module.css";
import trophy from "../../assets/trophy.png";
import cake from "../../assets/cake.png";
import gift from "../../assets/gift.png";
import poincharacter from "../../assets/pointcharacter.png";

const BenefitSection = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.item}>
          <img
            src={trophy}
            alt="혜택이미지입니다."
            className={classes.itemImg1}
          />
          <div className={classes.explain1}>
            <h3>등급 달성 혜택</h3>
            <p>1,500P 적립</p>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src={poincharacter}
            alt="혜택이미지입니다."
            className={classes.itemImg2}
          />
          <div className={classes.explain2}>
            <h3>미션 달성시 혜택</h3>
            <p>200P 적립</p>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src={gift}
            alt="혜택이미지입니다."
            className={classes.itemImg3}
          />
          <div className={classes.explain3}>
            <h3>매월 GREEN DAY 혜택</h3>
            <p>500P 적립</p>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src={cake}
            alt="혜택이미지입니다."
            className={classes.itemImg4}
          />
          <div className={classes.explain4}>
            <h3>생일축하 혜택</h3>
            <p>2,000P 적립</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitSection;
