# PICKTRE_frontend [![license](https://img.shields.io/badge/License-MIT_License-brightgreen)](https://github.com/PICKTRE/PICKTRE_frontend/blob/main/LICENSE)

## 소개
<img src="https://github.com/PICKTRE/PICKTRE_backend/assets/101933437/bb49dce2-a814-4722-8545-8b91e318f268" width="300" height="200">
<br>

> 환경을 위한 행동, 모두가 참여하는 서비스 (PICKTRE, Pick Trash)

현대 사회에서 쓰레기 문제는 점점 심각해지고 있으며, 쓰레기의 적절한 처리는 환경보호와 지속가능한 발전을 위해 중요한 문제로 인식되고 있습니다.

하지만, 여전히 공공장소에서 쓰레기를 적절하게 버리지 않는 경우가 많아 환경오염과 공공장소의 미관을 해치는문제가 발생하고 있습니다.

이러한 배경에서 PICKTRE는 쓰레기를 적절하게 처리하고, 시민들의 쓰레기 버리기 습관을 개선하여 환경보호와 재활용 문화를 확산 시키는데 목적을 두고 있습니다. 또한, 사용자들이 쓰레기를 버릴 때 보상을 제공하여 쓰레기 문제에 대한 인식과 참여 향상을 목표로 합니다.

[PICKTRE 홈페이지](https://picktre.netlify.app "PICKTRE") 

## 시연 영상

<div align="center">
 
  [![Video Label](http://img.youtube.com/vi/6T34HNa5KHw/0.jpg)](https://www.youtube.com/embed/6T34HNa5KHw?autoplay=1)
</div>

---

## 아키텍쳐

### 웹서버 아키텍처
<div align="center">
  <img src="./src/assets/service_architecture.png" />
</div>

### 소스 디렉토리
```
|   App.css
|   App.jsx
|   main.jsx
|
+---assets
|      
+---components
|   +---benefit
|   |       Benefit.jsx : 이용 혜택 페이지
|   |       Benefit.module.css
|   |       BenefitSection.jsx
|   |       BenefitSection.module.css
|   |       GradeSection.jsx
|   |       GradeSection.module.css
|   |
|   +---camera
|   |       QRcamera.jsx : QR 코드 리더기 스캔 카메라 페이지
|   |       QRcamera.module.css
|   |       TrashCamera.module.css
|   |       TrashCameraEwaste.jsx : 쓰레기 인식 카메라 페이지(Ewaste)
|   |       TrashCameraGlass.jsx : 쓰레기 인식 카메라 페이지(Glass)
|   |       TrashCameraMedical.jsx : 쓰레기 인식 카메라 페이지(Medical)
|   |       TrashCameraMetal.jsx : 쓰레기 인식 카메라 페이지(Metal)
|   |       TrashCameraPaper.jsx : 쓰레기 인식 카메라 페이지(Paper)
|   |       TrashCameraPlastic.jsx : 쓰레기 인식 카메라 페이지(Plastic)
|   |
|   +---common
|   |       AccordionList.jsx
|   |       AccordionList.module.css
|   |       chevron-down.svg
|   |       Footer.jsx : 페이지 내 푸터
|   |       Footer.module.css
|   |       Header.jsx : 페이지 내 헤더
|   |       Header.module.css
|   |       HeaderLayout.jsx : 페이지 내 헤더, 및 페이지 이름
|   |       HeaderLayout.module.css
|   |
|   +---home
|   |   |   Home.jsx : 메인 홈페이지
|   |   |   Home.module.css
|   |   |   HomeButton.jsx
|   |   |   HomeButton.module.css
|   |   |   HomeCard.jsx
|   |   |   HomeCard.module.css
|   |   |   HomeLevel.jsx
|   |   |   HomeLevel.module.css
|   |   |   HomeMainPostText.jsx
|   |   |   HomeMainPostText.module.css
|   |   |   HomeReward.jsx
|   |   |   HomeReward.module.css
|   |   |
|   |   \---dummy
|   |           cardData.json
|   |
|   +---inviteFriends
|   |       InviteFriends.jsx : 친구 초대하기 페이지
|   |       InviteFriends.module.css
|   |       InviteFriendsButton.jsx
|   |       InviteFriendsButton.module.css
|   |
|   +---landingPage
|   |       LandingPage.jsx : 로그인 안 되어 있을 시 로그인 페이지
|   |       LandingPage.module.css
|   |       Logo.jsx
|   |       Logo.module.css
|   |       RedirectPage.jsx
|   |       SocialAccountButton.jsx
|   |       SocialAccountButton.module.css
|   |
|   +---map
|   |       GeoLocation.jsx
|   |       Map.jsx : 지도 페이지
|   |       Map.module.css
|   |
|   +---myPage
|   |       MyList.jsx
|   |       MyList.module.css
|   |       MyPage.jsx : 마이페이지
|   |       MyPage.module.css
|   |       MyProfile.jsx
|   |       MyProfile.module.css
|   |       MySubPost.jsx
|   |       MySubPost.module.css
|   |
|   +---myUseReport
|   |       ActivityGraph.jsx
|   |       activityGraph.module.css
|   |       BadgeTitle.jsx
|   |       badgeTitle.module.css
|   |       MyUseReport.jsx : 이용 리포트 페이지
|   |       MyUseReport.module.css
|   |
|   +---notice
|   |   |   Notice.jsx : 공지사항 페이지
|   |   |   Notice.module.css
|   |   |
|   |   \---dummy
|   |           noticeData.json
|   |
|   +---point
|   |   |   Point.jsx : 포인트 페이지
|   |   |   Point.module.css
|   |   |   PointDropdown.jsx
|   |   |   PointDropdown.module.css
|   |   |   PointList.jsx
|   |   |   PointList.module.css
|   |   |   PointListElement.jsx
|   |   |   PointListElement.module.css
|   |   |   PointProfile.jsx
|   |   |   PointProfile.module.css
|   |   |
|   |   \---dummy
|   |           pointData.json
|   |           profileData.json
|   |
|   +---qna
|   |   |   Qna.jsx : 자주 묻는 질문 페이지
|   |   |   Qna.module.css
|   |   |
|   |   \---dummy
|   |           qnaData.json
|   |
|   +---ranking
|   |       Ranker.jsx
|   |       Ranker.module.css
|   |       Ranking.jsx : 랭킹 페이지
|   |       Ranking.module.css
|   |       RankingList.jsx
|   |
|   +---setting
|   |       Setting.jsx
|   |       Setting.module.css
|   |
|   \---store
|       |   Store.jsx : 스토어 페이지
|       |   Store.module.css
|       |   StoreDividingLine.jsx
|       |   StoreDividingLine.module.css
|       |   StoreGoods.jsx
|       |   StoreGoods.module.css
|       |   StoreOther.jsx
|       |   StoreOther.module.css
|       |   StorePopular.jsx
|       |   StorePopular.module.css
|       |   StoreSearching.jsx
|       |   StoreSearching.module.css
|       |
|       \---modal
|               StoreGoodsModal.jsx : 구매시 안내 모달 창
|               StoreGoodsModal.module.css
|
+---constants
|       OAuth.jsx
|       url.jsx
|
\---service
        cameraReward.jsx
        showProfile.jsx 
```

---

## 프로젝트 시작 (로컬)

1. 프로젝트를 clone 합니다.

```jsx
git clone https://github.com/PICKTRE/PICKTRE_frontend.git
```

2. clone이 완료되었다면, 다음 명령어로 npm library들을 설치합니다.

```jsx
npm i
```

1. 프로젝트를 실행합니다.

```jsx
npm run dev
```

---

### 프로젝트 시작

1. PICKTRE에 접속합니다.

```
https://picktre.netlify.app
```

---

## 프로젝트 기술 스택
### Environment
<div>
 <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">


### Development

<div>
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
 <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
 <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
 <img src="https://img.shields.io/badge/googlemaps-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white">
 <img src="https://img.shields.io/badge/tensorflow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white">
 <img src="https://img.shields.io/badge/zxing-181717?style=for-the-badge&logo=&logoColor=white">
</div>


### Deploy
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

### Communication
<div>
 <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
 <img src="https://img.shields.io/badge/googlemeet-00897B?style=for-the-badge&logo=googlemeet&logoColor=white"> 
</div>


---

## 프로젝트 페이지 

<p align="center">
  <img src=./readmeImg/메인홈페이지.png alt="executeShot1" width="150">
  <img src=./readmeImg/마이페이지.png alt="executeShot2" width="150"/>
  <img src=./readmeImg/지도.png alt="executeShot3" width="150">
  <img src=./readmeImg/포인트.png alt="executeShot4" width="150">
  <img src=./readmeImg/QR_코드_리더기_페이지.png alt="executeShot5" width="150">
  <img src=./readmeImg/쓰레기_인식_카메라_페이지.png alt="executeShot6" width="150">
  <img src=./readmeImg/랭킹.png alt="executeShot7" width="150">
  <img src=./readmeImg/스토어.png alt="executeShot8" width="150">
  <img src=./readmeImg/등급별_혜택안내.png alt="executeShot9" width="150">
  <img src=./readmeImg/이용리포트.png alt="executeShot10" width="150">
  <img src=./readmeImg/친구_초대하기.png alt="executeShot11" width="150">
  <img src=./readmeImg/공지사항.png alt="executeShot12" width="150">
  <img src=./readmeImg/자주_묻는_질문.png alt="executeShot13" width="150">
  <img src=./readmeImg/설정.png alt="executeShot13" width="150">
</p>

---

### 라이센스

`PICKTRE/PICKTRE_frontend`

- [MIT License](https://github.com/PICKTRE/PICKTRE_frontend/blob/main/LICENSE)

`facebook/react`

- https://github.com/facebook/react

- [MIT License](https://github.com/facebook/react/blob/main/LICENSE)

`vitejs/vite`

- https://github.com/vitejs/vite

- [MIT License](https://github.com/vitejs/vite/blob/main/LICENSE)

`googlemaps/google-maps-services-js`

- https://github.com/googlemaps/google-maps-services-js

- [Apache License 2.0](https://github.com/googlemaps/google-maps-services-js/blob/master/LICENSE.md)

`tensorflow/tfjs-models`

- https://github.com/tensorflow/tfjs-models

- [Apache License 2.0](https://github.com/tensorflow/tfjs-models/blob/master/LICENSE)

`framer/motion`

- https://github.com/framer/motion

- [MIT License](https://github.com/framer/motion/blob/main/LICENSE.md)


`axios/axios`

- https://github.com/axios/axios

- [MIT License](https://github.com/axios/axios/blob/v1.x/LICENSE)

`zxing/zxing`

- https://github.com/zxing/zxing

- [Apache License 2.0](https://github.com/zxing/zxing/blob/master/LICENSE)
