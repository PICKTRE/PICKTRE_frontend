import classes from "./PointDropdown.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const PointDropdown = () => {
  // 드롭다운 메뉴의 열림/닫힘 상태를 관리하는 상태값
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 드롭다운 메뉴를 표시하는 네비게이션 컴포넌트
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      {/* 메뉴 버튼 */}
      <motion.button
        className={classes.button}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        전체
        {/* 메뉴 아이콘 회전 애니메이션 */}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          {/* 화살표 아이콘 */}
          <svg
            fill="#000000"
            height="10px"
            width="10px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              ></path>
            </g>
          </svg>
        </motion.div>
      </motion.button>
      {/* 드롭다운 메뉴 목록 */}
      <motion.ul
        className={classes.ul}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* 드롭다운 메뉴 항목 */}
        <motion.li className={classes.list} variants={itemVariants}>
          전체
        </motion.li>
        <motion.li className={classes.list} variants={itemVariants}>
          받은 내역
        </motion.li>
        <motion.li className={classes.list} variants={itemVariants}>
          소비한 내역
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default PointDropdown;
