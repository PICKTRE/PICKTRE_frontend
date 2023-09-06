import classes from "./MySubPost.module.css";
import { useNavigate } from "react-router-dom";

const MySubPost = () => {
  const navigate = useNavigate();

  // "랭킹" 버튼 클릭 시 랭킹 페이지로 이동하는 함수
  const onClickRank = () => {
    navigate("/ranking");
  };

  // "스토어" 버튼 클릭 시 스토어 페이지로 이동하는 함수
  const onClickStore = () => {
    navigate("/store");
  };

  // "미션" 버튼 클릭 시 알림 메시지 표시하는 함수
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
