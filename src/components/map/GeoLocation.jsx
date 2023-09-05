import { useState, useEffect } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState(); // 현재 위치 정보 상태
  const [error, setError] = useState(""); // 위치 정보 가져오기 실패 시 에러 메시지 상태

  // 위치 정보를 가져오는 데 성공했을 때 호출되는 함수
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // 위치 정보 가져오기 실패 시 호출되는 함수
  const handleError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported."); // 브라우저에서 지원되지 않을 때 에러 설정
      return;
    }

    // 최초 위치 가져오기
    geolocation.getCurrentPosition(handleSuccess, handleError);

    // 실시간 위치 업데이트하기
    const watchId = geolocation.watchPosition(handleSuccess, handleError);

    return () => {
      geolocation.clearWatch(watchId); // 컴포넌트 언마운트 시 위치 업데이트 중지
    };
  }, []);

  return { location, error }; // 현재 위치 정보와 에러 메시지 반환
};
