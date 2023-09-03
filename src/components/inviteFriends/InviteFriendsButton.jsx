import classes from "./InviteFriendsButton.module.css";
import { motion } from "framer-motion";

const handleCopyClipBoard = async () => {
  try {
    await navigator.clipboard.writeText("https://picktre.netlify.app");
    console.log("복사에 성공했습니다.");
    alert("복사에 성공했습니다.")
  } catch (e) {
    console.log("복사에 실패했습니다.");
    alert("복사에 실패했습니다.")
  }
};

const InviteFriendsButton = () => {
  return (
    <>
      <div className={classes.container} onClick={handleCopyClipBoard}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
          <span className={classes.mainText}>
            링크 복사해서 친구들에게 공유하기
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default InviteFriendsButton;
