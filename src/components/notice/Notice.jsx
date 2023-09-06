import classes from "./Notice.module.css";
import HeaderLayout from "../common/HeaderLayout";
import { motion } from "framer-motion";
import Footer from "../common/Footer";
import AccordionList from "../common/AccordionList";
import dummyData from "./dummy/noticeData.json";

const Notice = () => {
  // 콘텐츠 애니메이션을 위한 변수와 설정
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  return (
    <>
      {/* 페이지 제목과 레이아웃 헤더 */}
      <HeaderLayout title="Notice" />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 공지사항 섹션 */}
        <div className={classes.noticeSection}>
          <div className={classes.noticeMainText}>
            공지사항
            <div className={classes.noticeSubText}>
              최신 업데이트 및 중요한 정보를 안내하는 페이지입니다.
            </div>
          </div>

          {/* 아코디언 형태의 공지사항 목록 */}
          <AccordionList dummyData={dummyData} />
        </div>
      </motion.main>
      {/* 공통 푸터 */}
      <Footer />
    </>
  );
};

export default Notice;
