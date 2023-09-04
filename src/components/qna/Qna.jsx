import HeaderLayout from "../common/HeaderLayout";
import AccordionList from "../common/AccordionList";
import Footer from "../common/Footer";
import classes from "./Qna.module.css";
import { motion } from "framer-motion";
import dummyData from "./dummy/qnaData.json";

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
        <HeaderLayout title="Qna" />
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={classes.qnaSection}>
            <div className={classes.qnaMainText}>
              자주 묻는 질문
              <div className={classes.qnaSubText}>
                많이 묻는 질문들과 그에 대한 답변을 확인하세요
              </div>
            </div>

            <AccordionList dummyData={dummyData} />
          </div>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default Qna;
