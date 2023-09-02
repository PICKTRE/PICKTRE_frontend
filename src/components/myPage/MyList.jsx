import classes from "./MyList.module.css";
import { IoIosArrowForward } from "react-icons/io";
import rank from "../../assets/rank.png";
import report from "../../assets/report.png";
import invite from "../../assets/invite.png";
import guide from "../../assets/guide.png";
import announcement from "../../assets/announcement.png";
import service_guide from "../../assets/service_guide.png";
import service_center from "../../assets/service_center.png";
import { useNavigate } from "react-router-dom";

const MyList = () => {
  const navigate = useNavigate();
  const onClickBenefit = () => {
    navigate("/benefit");
  };
  const onClickActivityReport = () => {
    navigate("/activity-report");
  };
  const onClickInviteFriends = () => {
    navigate("/invite-friends");
  };
  const onClickQna = () => {
    navigate("/qna");
  };
  const onClickNotice = () => {
    navigate("/notice");
  };

  const onClickAlert = () => {
    alert("추후에 업데이트 될 서비스입니다.");
  };

  return (
    <section className={classes.listSection}>
      <ul className={classes.firstList}>
        <li onClick={onClickBenefit}>
          <div className={classes.listTitle}>
            <img src={rank} alt="rank이미지입니다." className={classes.rank} />
            등급별 혜택안내
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickActivityReport}>
          <div className={classes.listTitle}>
            <img
              src={report}
              alt="report이미지입니다."
              className={classes.report}
            />
            이용리포트
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickInviteFriends}>
          <div className={classes.listTitle}>
            <img
              src={invite}
              alt="invite이미지입니다."
              className={classes.invite}
            />
            친구 초대하기
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickAlert}>
          <div className={classes.listTitle}>
            <img
              src={guide}
              alt="guide이미지입니다."
              className={classes.guide}
            />
            사용가이드
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
      </ul>
      <ul className={classes.secondList}>
        <li onClick={onClickNotice}>
          <div className={classes.listTitle}>
            <img
              src={announcement}
              alt="announcement이미지입니다."
              className={classes.announcement}
            />
            공지사항
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickAlert}>
          <div className={classes.listTitle}>
            <img
              src={service_guide}
              alt="service_guide이미지입니다."
              className={classes.service_guide}
            />
            서비스 안내
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickQna}>
          <div className={classes.listTitle}>
            <img
              src={service_center}
              alt="service_center이미지입니다."
              className={classes.service_center}
            />
            자주 묻는 질문
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
      </ul>
    </section>
  );
};

export default MyList;
