import classes from "./MyPage.module.css";
import MyList from "./MyList";
import Footer from "../common/Footer";
import MySubPost from "./MySubPost";
import MyProfile from "./MyProfile.jsx";
import { motion } from "framer-motion";
import HeaderLayout from "../common/HeaderLayout";

const contentVariants = {
  hidden: {
    opacity: 0.3,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  }
};

const MyPage = () => {
  return (
    <div>
      <HeaderLayout title="My Page"/>
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <section className={classes.profileSection}>
          <MyProfile />
        </section>
        <section className={classes.mainSubPost}>
          <MySubPost />
        </section>
        <MyList />
      </motion.main>
      <Footer />
    </div>
  );
};

export default MyPage;
