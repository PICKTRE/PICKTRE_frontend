import PropTypes from "prop-types";
import classes from "./StoreDividingLine.module.css";
import dividingLine from "../../assets/dividingLine.png";

const StoreDividingLine = ({ text }) => {
  return (
    <>
      <img
        className={classes.dividingLine}
        src={dividingLine}
        alt="dividingLine"
      />
      <div className={classes.text}>{text}</div>
    </>
  );
};

// 'text' prop의 데이터 타입과 필수 여부를 검사하는 propTypes 설정
StoreDividingLine.propTypes = {
  text: PropTypes.string.isRequired, // 'text' prop은 문자열(string) 타입이며 필수(required)임
};

export default StoreDividingLine;
