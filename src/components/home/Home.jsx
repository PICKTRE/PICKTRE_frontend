import classes from "./Home.module.css";
import { motion } from "framer-motion";
import HeaderLayout from "../common/HeaderLayout";
import Footer from "../common/Footer";
import HomeReward from "./HomeReward";
import HomeLevel from "./HomeLevel";
import HomeButton from "./HomeButton";
import HomeMainPostText from "./HomeMainPostText";
import HomeCard from "./HomeCard";
import cardData from "./dummy/cardData.json";

const Home = () => {
  // Framer Motion을 사용하여 애니메이션 효과를 위한 상태 설정
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3 },
    },
  };

  return (
    <div>
      {/* 헤더 레이아웃 컴포넌트를 렌더링하며, 타이틀을 "Home"으로 설정 */}
      <HeaderLayout title="Home" />
      {/* Framer Motion을 사용한 애니메이션 효과를 적용한 메인 섹션 */}
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 보상 섹션 */}
        <section className={classes.rewardSection}>
          <HomeReward />
        </section>
        {/* 레벨 섹션 */}
        <section className={classes.levelSection}>
          <HomeLevel />
        </section>
        {/* 버튼 섹션 */}
        <section className={classes.buttonSection}>
          <HomeButton />
        </section>
        {/* 메인 포스트 섹션 */}
        <section className={classes.mainPostSection}>
          <div className={classes.mainPost}>
            <div className={classes.mainPostContent}>
              {/* 홈 메인 포스트 텍스트 컴포넌트 */}
              <HomeMainPostText />
              {/* 메인 카드 섹션 */}
              <div className={classes.mainCardSection}>
                {/* 카드 데이터 매핑 및 렌더링 */}
                {cardData.map((data, index) => (
                  <HomeCard
                    key={index}
                    cardMainText={data.cardMainText}
                    cardSubText={data.cardSubText}
                    cardHeartCount={data.cardHeartCount}
                    cardRank={index + 1}
                    cardPhoto={data.cardPhotoURL}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      {/* 푸터 컴포넌트 */}
      <Footer />
    </div>
  );
};

export default Home;
