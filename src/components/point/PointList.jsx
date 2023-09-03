import classes from "./PointList.module.css";
import PointDropdown from "./PointDropdown";
import PointListElement from "./PointListElement";

const PointList = () => {
  return (
    <>
      <div className={classes.pointList}>
        <div className={classes.dropdownSection}>
          <PointDropdown />
        </div>
        <div className={classes.listOnlySection}>
          <PointListElement />
        </div>
      </div>
    </>
  );
};

export default PointList;
