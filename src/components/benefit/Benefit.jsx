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
      <HeaderLayout title="Benefits by grade" />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <section className={classes.gradeSection}>
          <GradeSection />
        </section>
        <section className={classes.benefitSection}>
          혜택
          <BenefitSection />
        </section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Benefit;
