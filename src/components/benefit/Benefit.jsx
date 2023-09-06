import Footer from "../common/Footer";
import classes from "./Benefit.module.css";
import GradeSection from "./GradeSection";
import { motion } from "framer-motion";
import BenefitSection from "./BenefitSection";
import HeaderLayout from "../common/HeaderLayout";

const Benefit = () => {
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
      {/* 페이지 헤더 */}
      <HeaderLayout title="Benefits by grade" />
      {/* 페이지 컨텐츠 */}
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 등급 정보 섹션 */}
        <section className={classes.gradeSection}>
          <GradeSection />
        </section>
        {/* 혜택 정보 섹션 */}
        <section className={classes.benefitSection}>
          혜택
          <BenefitSection />
        </section>
      </motion.main>
      {/* 페이지 푸터 */}
      <Footer />
    </>
  );
};

export default Benefit;
