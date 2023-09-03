import { useState, useEffect } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState("");

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported.");
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

  return { location, error };
};