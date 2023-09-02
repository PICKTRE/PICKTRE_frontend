import classes from "./Logo.module.css";
import Image from "../../assets/landing_page_logo.png";

const Logo = () => {
  return (
    <>
      <img src={Image} alt="logo" className={classes.image} />
    </>
  );
};

export default Logo;
