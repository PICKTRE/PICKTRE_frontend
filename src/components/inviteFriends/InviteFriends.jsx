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



  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState("");


  useEffect(() => {
    showProfile()
      .then((data) => {
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
        <HeaderLayout title="Invite Friends" />
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={classes.whiteSection} />
          <img src={inviteP} alt="소개 이미지" className={classes.imgs} />
          <section className={classes.profileSection}>
            {isLoading ? 
            (<div className={classes.Myprofile} />) : 
            (<img src={image} className={classes.Myprofile} />)
            }
            <img src={friends_profile} alt="친구 이미지" className={classes.Otherprofile} />
          </section>
          <section className={classes.lastSection}>
            <InviteFriendsButton />
          </section>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default InviteFriends;
