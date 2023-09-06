import Footer from "../common/Footer";
import classes from "./Setting.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import HeaderLayout from "../common/HeaderLayout";

// 콘텐츠 애니메이션을 위한 변수와 설정
const contentVariants = {
  hidden: {
    opacity: 0.3,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const Setting = () => {
  const navigate = useNavigate();

  // 로그아웃 버튼 클릭 시 확인 메시지 출력 및 로그아웃 처리
  const onClickAlert = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("memberId");
      alert("로그아웃 되었습니다.");
      navigate("/");
    }
  };

  return (
    <>
      {/* 페이지 제목과 레이아웃 헤더 */}
      <HeaderLayout title="Setting" />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className={classes.firstList}>
          {/* 로그아웃 항목 */}
          <li onClick={onClickAlert}>
            <div className={classes.listTitle}>로그아웃 하기</div>
            <IoIosArrowForward size="27" color="#ACE2B5" />
          </li>
        </ul>
      </motion.main>
      {/* 공통 푸터 */}
      <Footer />
    </>
  );
};

export default Setting;
