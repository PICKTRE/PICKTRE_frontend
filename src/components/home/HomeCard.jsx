import PropTypes from "prop-types";
import classes from "./HomeCard.module.css";
import { FaHeart } from "react-icons/fa6";

const HomeCard = ({
  cardMainText,
  cardSubText,
  cardHeartCount,
  cardRank,
  cardPhoto,
}) => {
  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + "K" : count;
  };

  return (
    <>
      <div className={classes.cardComponentWrapper}>
        <div className={classes.cardBadge}>BEST {cardRank}</div>
        <div className={classes.card}>
          <div className={classes.cardContentWrapper}></div>
          <div
            className={classes.cardPhoto}
            style={{ backgroundImage: `url(${cardPhoto})` }}
          />
          <div className={classes.cardMainText}>{cardMainText}</div>
          <div className={classes.cardSubText}>{cardSubText}</div>
          <div className={classes.cardFooterWrapper}>
            <div className={classes.cardFooter}>
              <div className={classes.cardHeart}>
                <FaHeart />
              </div>
              <div className={classes.cardLikeCount}>
                {formatCount(cardHeartCount)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeCard.propTypes = {
  cardMainText: PropTypes.string.isRequired, // cardMainText props의 유형 및 필수 여부 검사
  cardSubText: PropTypes.string.isRequired, // cardSubText props의 유형 및 필수 여부 검사
  cardHeartCount: PropTypes.string.isRequired, // cardHeartCount props의 유형 및 필수 여부 검사
  cardRank: PropTypes.number.isRequired, // cardHeartCount props의 유형 및 필수 여부 검사
  cardPhoto: PropTypes.string.isRequired, // cardPhoto props의 유형 및 필수 여부 검사
};

export default HomeCard;
