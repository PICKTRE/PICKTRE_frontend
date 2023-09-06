import HeaderLayout from "../common/HeaderLayout";
import AccordionList from "../common/AccordionList";
import Footer from "../common/Footer";
import classes from "./Qna.module.css";
import { motion } from "framer-motion";
import dummyData from "./dummy/qnaData.json";

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

const Qna = () => {
  return (
    <>
      <div>
        {/* 페이지 제목과 레이아웃 헤더 */}
        <HeaderLayout title="Qna" />
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Q&A 섹션 */}
          <div className={classes.qnaSection}>
            <div className={classes.qnaMainText}>
              자주 묻는 질문
              <div className={classes.qnaSubText}>
                많이 묻는 질문들과 그에 대한 답변을 확인하세요
              </div>
            </div>

            {/* 아코디언 형태의 Q&A 목록 */}
            <AccordionList dummyData={dummyData} />
          </div>
        </motion.main>
        {/* 공통 푸터 */}
        <Footer />
      </div>
    </>
  );
};

export default Qna;
