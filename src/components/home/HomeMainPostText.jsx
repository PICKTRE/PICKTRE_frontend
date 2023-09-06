import classes from "./HomeMainPostText.module.css";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const HomeMainPostText = () => {
  // 사용자 이름 상태 변수 초기화
  const [name, setName] = useState("");

  useEffect(() => {
    // 사용자 프로필 데이터를 가져와 사용자 이름 상태 변수 업데이트
    showProfile()
      .then((data) => {
        setName(data.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* 홈 메인 포스트 텍스트 영역 */}
      <div className={classes.homeMainPostTextSection}>
        {/* 사용자 이름을 포함한 환영 메시지 표시 */}
        {name}님! <br />
        인기있는 매거진 이야기를 확인해보세요!
      </div>
    </>
  );
};

export default HomeMainPostText;
