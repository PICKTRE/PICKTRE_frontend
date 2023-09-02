import classes from "./SocialAccountButton.module.css";
import Kakaotalk from "../../assets/kakaotalk.png";
import { RiFacebookFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const SocialAccountButton = () => {
  const handleGoogleClick = async () => {
    window.location.href = "https://www.pick-tre.com/api/google ";
  };
  const onClickAlert = () => {
    alert("추후에 업데이트 될 서비스입니다.");
  };

  return (
    <>
      <div className={classes.buttonKakao} onClick={onClickAlert}>
        <img
          src={Kakaotalk}
          alt="kakaotalk_logos"
          className={classes.kakaoLogo}
        />
      </div>
      <div className={classes.buttonNaver} onClick={onClickAlert}>
        <SiNaver className={classes.naverLogo} size="22px" />
      </div>
      <div className={classes.buttonFacebook} onClick={onClickAlert}>
        <RiFacebookFill className={classes.facebookLogo} size="32px" />
      </div>

      <div className={classes.buttonGoogle} onClick={handleGoogleClick}>
        <FcGoogle size="30px" />
      </div>
    </>
  );
};

export default SocialAccountButton;
