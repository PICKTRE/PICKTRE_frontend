import { useEffect } from "react";
import { useNavigate } from "react-router";

const RedirectPage = () => {
    const navigate = useNavigate();

    function getQueryParamValue(key) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(key);
    }

    // memberId와 accessToken 값을 추출
    const memberId = getQueryParamValue('memberId');
    //const accessToken = getQueryParamValue('accessToken');

    // 추출한 값들을 활용
    // console.log('Member ID:', memberId);
    // console.log('Access Token:', accessToken);

    // 추출한 accessToken 값을 localStorage에 저장
    useEffect(() => {
        // memberId 값을 localStorage에 저장
        localStorage.setItem('memberId', memberId);
        console.log("저장완료");
        // memberId가 유효하다면 /home 페이지로 이동
        navigate('/home');
        window.location.reload();
        // if (memberId) {
        //     navigate('/home');
        // } else {
        //     alert("로그인 실패");
        //     navigate('/');
        // }
    }, [navigate, memberId]);

    return (
        <>접속중</>
    )
}

export default RedirectPage;