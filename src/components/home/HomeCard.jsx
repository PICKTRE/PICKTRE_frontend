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
  // 카드 하트 카운트 형식을 포맷하는 함수
  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + "K" : count;
  };

  return (
    <>
      {/* 카드 컴포넌트 래퍼 */}
      <div className={classes.cardComponentWrapper}>
        {/* 카드 뱃지 */}
        <div className={classes.cardBadge}>BEST {cardRank}</div>
        {/* 카드 */}
        <div className={classes.card}>
          <div className={classes.cardContentWrapper}></div>
          {/* 카드 사진 */}
          <div
            className={classes.cardPhoto}
            style={{ backgroundImage: `url(${cardPhoto})` }}
          />
          {/* 카드 주요 텍스트 */}
          <div className={classes.cardMainText}>{cardMainText}</div>
          {/* 카드 부가 설명 */}
          <div className={classes.cardSubText}>{cardSubText}</div>
          {/* 카드 푸터 */}
          <div className={classes.cardFooterWrapper}>
            <div className={classes.cardFooter}>
              {/* 하트 아이콘 */}
              <div className={classes.cardHeart}>
                <FaHeart />
              </div>
              {/* 좋아요 카운트 */}
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

// props의 유형 및 필수 여부 검사를 위한 propTypes 설정
HomeCard.propTypes = {
  cardMainText: PropTypes.string.isRequired, // cardMainText props의 유형 및 필수 여부 검사
  cardSubText: PropTypes.string.isRequired, // cardSubText props의 유형 및 필수 여부 검사
  cardHeartCount: PropTypes.string.isRequired, // cardHeartCount props의 유형 및 필수 여부 검사
  cardRank: PropTypes.number.isRequired, // cardHeartCount props의 유형 및 필수 여부 검사
  cardPhoto: PropTypes.string.isRequired, // cardPhoto props의 유형 및 필수 여부 검사
};

export default HomeCard;
