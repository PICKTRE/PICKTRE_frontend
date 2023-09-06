import classes from "./Ranker.module.css";

// `Ranker` 컴포넌트는 랭킹 목록에서 개별 랭킹 항목을 표시합니다.
// `rank`, `name`, `count`는 이 컴포넌트의 props로 전달됩니다.
// `rank`는 랭킹 순위, `name`은 사용자 이름, `count`는 버린 횟수를 나타냅니다.
// eslint-disable-next-line react/prop-types
const Ranker = ({ rank, name, count }) => {
  return (
    <>
      {/* `rank`, `name`, `count` 정보를 표시하는 컨테이너입니다. */}
      <div
        className={`${classes.rankerSection} ${
          rank === 1 ? classes.rankFirst : ""
        }`}
      >
        {/* 순위를 나타내는 부분 */}
        <span className={classes.rank}>{rank}</span>
        {/* 사용자 이름을 나타내는 부분 */}
        <span className={classes.name}>{name}</span>
        {/* 버린 횟수를 나타내는 부분 */}
        <span className={classes.count}>{count}회</span>
      </div>
    </>
  );
};

export default Ranker;
