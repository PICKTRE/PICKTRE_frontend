import HeaderLayout from "../common/HeaderLayout";
import RankingList from "./RankingList";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import classes from "./Ranking.module.css";

const contentVariants = {
  hidden: {
    opacity: 0.3,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const Ranking = () => {
  return (
    <>
      <div>
        <HeaderLayout title="Ranking" />
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={classes.rankingSection}>
            <div className={classes.rankingMainText}>
              랭킹
              <div className={classes.rankingSubText}>
                재활용 열정과 환경 보호 노력을 바탕으로 한 랭킹입니다. 환경
                보호의 중요성을 공유하며 함께 노력하는 모습을 확인하세요! (순위
                정렬 기준: 버린 횟수){" "}
              </div>
            </div>
            <div className={classes.rankingListSection}>
              <RankingList />
            </div>
          </div>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default Ranking;
