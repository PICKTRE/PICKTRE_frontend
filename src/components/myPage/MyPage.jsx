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
  },
};

const MyPage = () => {
  return (
    <div>
      {/* 페이지 상단에 HeaderLayout 컴포넌트를 렌더링하며 'My Page'라는 타이틀을 전달 */}
      <HeaderLayout title="My Page" />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 프로필 섹션을 표시하는 MyProfile 컴포넌트 */}
        <section className={classes.profileSection}>
          <MyProfile />
        </section>
        {/* 메인 하단의 게시물 섹션을 표시하는 MySubPost 컴포넌트 */}
        <section className={classes.mainSubPost}>
          <MySubPost />
        </section>
        {/* 마이페이지 메뉴 목록을 표시하는 MyList 컴포넌트 */}
        <MyList />
      </motion.main>
      {/* 페이지 하단에 Footer 컴포넌트를 렌더링 */}
      <Footer />
    </div>
  );
};

export default MyPage;
