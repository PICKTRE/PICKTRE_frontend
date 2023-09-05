import classes from "./Point.module.css";
import { motion } from "framer-motion";
import PointProfile from "./PointProfile";
import PointList from "./PointList";
import Footer from "../common/Footer";
import HeaderLayout from "../common/HeaderLayout";

const Point = () => {
  // 페이지 진입 시 애니메이션 효과를 위한 변화 설정
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
      {/* HeaderLayout 컴포넌트를 이용하여 페이지 제목 표시 */}
      <HeaderLayout title="Point" />
      {/* 포인트 페이지 메인 컨텐츠 */}
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 포인트 프로필 정보를 담고 있는 섹션 */}
        <section className={classes.profileSection}>
          <PointProfile />
        </section>
        {/* 포인트 리스트를 표시하는 섹션 */}
        <section className={classes.pointListSection}>
          <PointList />
        </section>
      </motion.main>
      {/* 공통으로 사용되는 Footer */}
      <Footer />
    </>
  );
};

export default Point;
