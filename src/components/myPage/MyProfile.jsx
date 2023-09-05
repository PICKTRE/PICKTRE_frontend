import classes from "./MyProfile.module.css";
import { useEffect, useState } from "react";
import showProfile from "../../service/showProfile";

const MyProfile = () => {
  const [name, setName] = useState(""); // 사용자 이름을 저장하기 위한 상태
  const [point, setPoint] = useState(0); // 보유 리워드 포인트를 저장하기 위한 상태
  const [todayPoint, setTodayPoint] = useState(0); // 오늘 얻은 리워드 포인트를 저장하기 위한 상태
  const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태를 관리하기 위한 상태
  const [mail, setMail] = useState(""); // 사용자 이메일 주소를 저장하기 위한 상태
  const [image, setImage] = useState(""); // 프로필 이미지 URL을 저장하기 위한 상태
  const [tierImg, setTierImg] = useState(""); // 사용자 티어 이미지 URL을 저장하기 위한 상태

  useEffect(() => {
    // 사용자 정보를 불러오는 함수 실행
    showProfile()
      .then((data) => {
        // API로부터 데이터를 성공적으로 가져왔을 때 실행
        setName(data.data.username); // 이름 업데이트
        setTodayPoint(data.data.todayReward); // 오늘 얻은 리워드 업데이트
        setPoint(data.data.rewardPoints); // 보유 리워드 포인트 업데이트
        setImage(data.data.picture); // 프로필 이미지 URL 업데이트
        setTierImg(data.data.tierPath); // 사용자 티어 이미지 URL 업데이트
        setMail(data.data.mail); // 이메일 주소 업데이트
        setIsLoading(false); // 로딩 상태 해제
      })
      .catch((err) => {
        console.log(err); // 데이터 가져오기 실패 시 콘솔에 에러 메시지 표시
        setIsLoading(false); // 로딩 상태 해제
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className={classes.profileSection}>
      {isLoading ? (
        <div className={classes.profileImg} /> // 데이터 로딩 중에는 프로필 이미지를 표시하지 않음
      ) : (
        <img src={image} alt="profile" className={classes.profileImg} /> // 이미지 로딩이 완료되면 프로필 이미지 표시
      )}
      <div className={classes.profileInfoSection}>
        <div className={classes.profile}>
          <ul className={classes.profileInfo}>
            <li>
              {isLoading ? (
                <div className={classes.name} /> // 데이터 로딩 중에는 이름을 표시하지 않음
              ) : (
                <div className={classes.names}>{name}</div> // 이름 로딩이 완료되면 이름 표시
              )}
            </li>
            <li>
              TODAY 리워드
              {isLoading ? (
                <div className={classes.todayReward} /> // 데이터 로딩 중에는 오늘 얻은 리워드 포인트를 표시하지 않음
              ) : (
                <div className={classes.todayRewards}>{todayPoint}P</div> // 리워드 포인트 로딩이 완료되면 오늘 얻은 리워드 포인트 표시
              )}
            </li>
            <li>
              보유리워드{" "}
              {isLoading ? (
                <div className={classes.totalReward} /> // 데이터 로딩 중에는 보유 리워드 포인트를 표시하지 않음
              ) : (
                <div className={classes.totalRewardS}>{point}P</div> // 보유 리워드 포인트 로딩이 완료되면 보유 리워드 포인트 표시
              )}
            </li>
          </ul>
          <div className={classes.profileTier}>
            {isLoading ? (
              <div className={classes.profileTierImg} /> // 데이터 로딩 중에는 티어 이미지를 표시하지 않음
            ) : (
              <img
                src={tierImg}
                alt="티어 이미지 입니다."
                className={classes.profileTierImg} // 티어 이미지 로딩이 완료되면 티어 이미지 표시
              />
            )}
          </div>
        </div>
        {isLoading ? (
          <button className={classes.verify}>이메일을 인증해주세요</button> // 데이터 로딩 중에는 이메일 주소를 표시하지 않음
        ) : (
          <button className={classes.verify}>{mail}</button> // 이메일 주소 로딩이 완료되면 이메일 주소 표시
        )}
      </div>
    </div>
  );
};

export default MyProfile;
