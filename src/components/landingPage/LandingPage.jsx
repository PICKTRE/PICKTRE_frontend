import classes from "./LandingPage.module.css";
import Logo from "./Logo";
import SocialAccountButton from "./SocialAccountButton";

const LandingPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logoSection}>
          <Logo />
        </div>
        <div className={classes.divideLineSection}>
          <div className={classes.horizontalDivider} />
          <span className={classes.dividerText}>지금 PICKTRE를 시작하세요</span>
          <div className={classes.horizontalDivider} />
        </div>
        <div className={classes.socialAccountLoginSection}>
          <SocialAccountButton />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
