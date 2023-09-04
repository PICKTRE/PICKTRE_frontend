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

StoreDividingLine.propTypes = {
  text: PropTypes.string.isRequired, // text props의 유형 및 필수 여부 검사
};

export default StoreDividingLine;
