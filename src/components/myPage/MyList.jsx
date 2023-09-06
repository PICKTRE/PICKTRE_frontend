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

  // 혜택 버튼 클릭 시 이벤트 핸들러
  const onClickBenefit = () => {
    navigate("/benefit");
  };

  // 이용 리포트 버튼 클릭 시 이벤트 핸들러
  const onClickActivityReport = () => {
    navigate("/activity-report");
  };

  // 친구 초대하기 버튼 클릭 시 이벤트 핸들러
  const onClickInviteFriends = () => {
    navigate("/invite-friends");
  };

  // 사용 가이드 버튼 클릭 시 이벤트 핸들러
  const onClickGuide = () => {
    alert("추후에 업데이트 될 서비스입니다.");
  };

  // 공지사항 버튼 클릭 시 이벤트 핸들러
  const onClickNotice = () => {
    navigate("/notice");
  };

  // 서비스 안내 버튼 클릭 시 이벤트 핸들러
  const onClickServiceGuide = () => {
    alert("추후에 업데이트 될 서비스입니다.");
  };

  // 자주 묻는 질문 버튼 클릭 시 이벤트 핸들러
  const onClickFAQ = () => {
    navigate("/faq");
  };

  return (
    <section className={classes.listSection}>
      <ul className={classes.firstList}>
        <li onClick={onClickBenefit}>
          <div className={classes.listTitle}>
            <img src={rank} alt="등급 이미지" className={classes.rank} />
            등급별 혜택 안내
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickActivityReport}>
          <div className={classes.listTitle}>
            <img src={report} alt="리포트 이미지" className={classes.report} />
            이용 리포트
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickInviteFriends}>
          <div className={classes.listTitle}>
            <img src={invite} alt="초대 이미지" className={classes.invite} />
            친구 초대하기
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickGuide}>
          <div className={classes.listTitle}>
            <img src={guide} alt="가이드 이미지" className={classes.guide} />
            사용 가이드
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
      </ul>
      <ul className={classes.secondList}>
        <li onClick={onClickNotice}>
          <div className={classes.listTitle}>
            <img
              src={announcement}
              alt="공지 이미지"
              className={classes.announcement}
            />
            공지사항
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickServiceGuide}>
          <div className={classes.listTitle}>
            <img
              src={service_guide}
              alt="서비스 가이드 이미지"
              className={classes.service_guide}
            />
            서비스 안내
          </div>
          <IoIosArrowForward size="27" color="#ACE2B5" />
        </li>
        <li onClick={onClickFAQ}>
          <div className={classes.listTitle}>
            <img
              src={service_center}
              alt="자주 묻는 질문 이미지"
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
