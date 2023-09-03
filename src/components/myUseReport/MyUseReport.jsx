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
        setName(data.data.username);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <HeaderLayout title="My Use Report"/>
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <section className={classes.badgeSection}>
          <BadgeTitle />
        </section>
        <section className={classes.activitySection}>
          {isLoading ?
            (<div className={classes.activities} />) :
            (<p>
              {name}님의
              <br />
              쓰레기수거 활동 분석입니다.
            </p>)
          }
          <ActivityGraph />
        </section>
      </motion.main>
      <Footer />
    </>
  );
};

export default ActivityReport;
