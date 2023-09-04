import classes from "./Notice.module.css";
import HeaderLayout from "../common/HeaderLayout";
import { motion } from "framer-motion";
import Footer from "../common/Footer";
import AccordionList from "../common/AccordionList";
import dummyData from "./dummy/noticeData.json";

const Notice = () => {
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
      <HeaderLayout title="Notice" />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={classes.noticeSection}>
          <div className={classes.noticeMainText}>
            공지사항
            <div className={classes.noticeSubText}>
              최신 업데이트 및 중요한 정보를 안내하는 페이지입니다.
            </div>
          </div>

          <AccordionList dummyData={dummyData} />
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Notice;
