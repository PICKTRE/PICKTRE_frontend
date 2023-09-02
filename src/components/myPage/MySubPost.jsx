import classes from "./MySubPost.module.css";
import { useNavigate } from "react-router-dom";

const MySubPost = () => {
  const navigate = useNavigate();
  const onClickRank = () => {
    navigate("/ranking");
  };
  const onClickStore = () => {
    navigate("/store");
  };

  const onClickAlert = () => {
    alert("추후에 업데이트 될 서비스 입니다.");
  };

  return (
    <div className={classes.subButton}>
      <div className={classes.ranking} onClick={onClickRank}>
        랭킹
      </div>
      <div className={classes.store} onClick={onClickStore}>
        스토어
      </div>
      <div className={classes.mission} onClick={onClickAlert}>
        미션
      </div>
    </div>
  );
};

export default MySubPost;
