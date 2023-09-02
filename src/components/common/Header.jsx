import myPageLogo from "../../assets/myPageLogo.png";
import { BiBell, BiHomeAlt } from "react-icons/bi";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/home");
  };

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
            <BiHomeAlt size="27" margin-right="19" onClick={onClickHome}/>
          </li>
          <li>
            <BiBell size="27" />
          </li>
        </div>
      </div>
    </section>
  );
};

export default Header;
