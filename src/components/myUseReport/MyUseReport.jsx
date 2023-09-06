import classes from "./MyUseReport.module.css";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import ActivityGraph from "./ActivityGraph";
import BadgeTitle from "./BadgeTitle";
import showProfile from "../../service/showProfile";
import HeaderLayout from "../common/HeaderLayout";
import { useEffect, useState } from "react";

const ActivityReport = () => {
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    showProfile()
      .then((data) => {
        // 사용자 이름 설정
        setName(data.data.username);
        setIsLoading(false); // 로딩 상태 해제
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // 로딩 상태 해제
      });
  }, []);

  return (
    <>
      {/* 페이지 상단에 헤더 레이아웃 */}
      <HeaderLayout title="내 사용 보고서" />
      {/* 페이지 콘텐츠 */}
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 뱃지 타이틀 섹션 */}
        <section className={classes.badgeSection}>
          <BadgeTitle />
        </section>
        {/* 활동 그래프 섹션 */}
        <section className={classes.activitySection}>
          {isLoading ? ( // 로딩 중인 경우
            <div className={classes.activities} />
          ) : (
            // 로딩이 완료된 경우
            <p>
              {name}님의
              <br />
              쓰레기 수거 활동 분석입니다.
            </p>
          )}
          <ActivityGraph />
        </section>
      </motion.main>
      {/* 페이지 하단에 푸터 */}
      <Footer />
    </>
  );
};

export default ActivityReport;
