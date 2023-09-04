import classes from "./Ranker.module.css";

// eslint-disable-next-line react/prop-types
const Ranker = ({ rank, name, count }) => {
  return (
    <>
      <div
        className={`${classes.rankerSection} ${
          rank === 1 ? classes.rankFirst : ""
        }`}
      >
        <span className={classes.rank}>{rank}</span>
        <span className={classes.name}>{name}</span>
        <span className={classes.count}>{count}회</span>
      </div>
    </>
  );
};

export default Ranker;
