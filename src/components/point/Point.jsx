import classes from "./Point.module.css";
import { motion } from "framer-motion";
import PointProfile from "./PointProfile";
import PointList from "./PointList";
import Footer from "../common/Footer";
import HeaderLayout from "../common/HeaderLayout";

const Point = () => {
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
      <HeaderLayout title="Point" />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <section className={classes.profileSection}>
          <PointProfile />
        </section>
        <section className={classes.pointListSection}>
          <PointList />
        </section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Point;
