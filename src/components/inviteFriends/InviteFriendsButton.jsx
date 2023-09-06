import classes from "./InviteFriendsButton.module.css";
import { motion } from "framer-motion";

// 클립보드에 텍스트 복사하는 함수
const handleCopyClipBoard = async () => {
  try {
    await navigator.clipboard.writeText("https://picktre.netlify.app");
    console.log("복사에 성공했습니다.");
    alert("복사에 성공했습니다.");
  } catch (e) {
    console.log("복사에 실패했습니다.");
    alert("복사에 실패했습니다.");
  }
};

const InviteFriendsButton = () => {
  return (
    <>
      {/* 클릭 시 클립보드에 링크 복사 */}
      <div className={classes.container} onClick={handleCopyClipBoard}>
        {/* 버튼 스케일 애니메이션 */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
          {/* 버튼 텍스트 */}
          <span className={classes.mainText}>
            링크 복사해서 친구들에게 공유하기
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default InviteFriendsButton;
