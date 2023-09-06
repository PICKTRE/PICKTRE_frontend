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
        {/* 페이지 상단에 공통적으로 사용되는 헤더 레이아웃을 불러옵니다. */}
        <HeaderLayout title="Ranking" />
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={classes.rankingSection}>
            <div className={classes.rankingMainText}>
              {/* 랭킹 페이지의 주요 텍스트를 표시합니다. */}
              랭킹
              <div className={classes.rankingSubText}>
                {/* 랭킹 페이지의 부가적인 텍스트를 표시합니다. */}
                재활용 열정과 환경 보호 노력을 바탕으로 한 랭킹입니다. 환경
                보호의 중요성을 공유하며 함께 노력하는 모습을 확인하세요! (순위
                정렬 기준: 버린 횟수){" "}
              </div>
            </div>
            <div className={classes.rankingListSection}>
              {/* 랭킹 리스트 컴포넌트를 불러와서 표시합니다. */}
              <RankingList />
            </div>
          </div>
        </motion.main>
        {/* 페이지 하단에 공통적으로 사용되는 푸터를 불러옵니다. */}
        <Footer />
      </div>
    </>
  );
};

export default Ranking;
