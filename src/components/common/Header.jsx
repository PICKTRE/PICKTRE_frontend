import myPageLogo from "../../assets/myPageLogo.png";
import { BiHomeAlt } from "react-icons/bi";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.mainHeader}>
      <div className={classes.mainHeaderContent}>
        <img
          src={myPageLogo}
          alt="마이페이지 로고 입니다."
          className={classes.myPageLogo}
        />
        <div className={classes.headerIcons}>
          <li>
            <BiHomeAlt size="27" margin-right="19" />
          </li>
        </div>
      </div>
    </section>
  );
};

export default Header;
