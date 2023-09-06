import classes from "./badgeTitle.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const BadgeTitle = () => {
  const [name, setName] = useState("");
  const [tierImg, setTierImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 프로필 정보 불러오기
    showProfile()
      .then((data) => {
        setName(data.data.username);
        setTierImg(data.data.tierPath);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className={classes.badgeTitle}>
        {isLoading ? (
          <div className={classes.titles} />
        ) : (
          <p>
            {/* 사용자 이름과 뱃지 상태를 표시 */}
            {name}님,
            <br />
            획득한 뱃지 현황입니다.
          </p>
        )}
        <div className={classes.badgeSection}>
          <div className={classes.badgeImgSection}>
            {isLoading ? (
              <div className={classes.tierImgs} />
            ) : (
              <img
                src={tierImg}
                alt="티어 이미지입니다."
                className={classes.tierImg}
              />
            )}
          </div>
          {/* 추가적인 뱃지 섹션을 추가 */}
          <div className={classes.badgeImgSection}></div>
          <div className={classes.badgeImgSection}></div>
        </div>
        {/* 더 많은 뱃지를 보기 위한 버튼 */}
        <button className={classes.btn}>
          다른 뱃지 더보기 <IoIosArrowForward size="14" color="#008163" />
        </button>
      </div>
    </>
  );
};

export default BadgeTitle;
