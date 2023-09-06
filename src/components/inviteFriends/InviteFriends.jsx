import classes from "./InviteFriends.module.css";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import inviteP from "../../assets/inviteP.png";
import InviteFriendsButton from "./InviteFriendsButton";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";
import friends_profile from "../../assets/friends_profile.png";
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

const InviteFriends = () => {
  // 상태 변수 및 이미지 로딩 상태 초기화
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState("");

  useEffect(() => {
    // 프로필 정보를 불러오는 비동기 함수 실행
    showProfile()
      .then((data) => {
        // 프로필 이미지 및 로딩 상태 업데이트
        setImage(data.data.picture);
        setIsLoading(false);
        // console.log("Data loaded:", data.data.rewardPoints, data.data.username);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {/* 페이지 헤더 */}
        <HeaderLayout title="친구 초대" />
        {/* 페이지 내용 */}
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={classes.whiteSection} />
          <img src={inviteP} alt="소개 이미지" className={classes.imgs} />
          {/* 프로필 섹션 */}
          <section className={classes.profileSection}>
            {isLoading ? (
              // 로딩 중인 경우 빈 프로필 이미지
              <div className={classes.Myprofile} />
            ) : (
              // 이미지 로딩이 완료된 경우 프로필 이미지 표시
              <img src={image} className={classes.Myprofile} />
            )}
            {/* 친구 프로필 이미지 */}
            <img
              src={friends_profile}
              alt="친구 이미지"
              className={classes.Otherprofile}
            />
          </section>
          {/* 초대 버튼 섹션 */}
          <section className={classes.lastSection}>
            <InviteFriendsButton />
          </section>
        </motion.main>
        {/* 페이지 푸터 */}
        <Footer />
      </div>
    </>
  );
};

export default InviteFriends;
