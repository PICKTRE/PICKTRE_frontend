import classes from "./PointList.module.css";
import PointDropdown from "./PointDropdown";
import PointListElement from "./PointListElement";

const PointList = () => {
  return (
    <>
      <div className={classes.pointList}>
        {/* 포인트 드롭다운 메뉴 컴포넌트 */}
        <div className={classes.dropdownSection}>
          <PointDropdown />
        </div>
        {/* 포인트 리스트 요소 컴포넌트 */}
        <div className={classes.listOnlySection}>
          <PointListElement />
        </div>
      </div>
    </>
  );
};

export default PointList;
