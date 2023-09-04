import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MyPage from "./components/myPage/MyPage";
import Point from "./components/point/Point";
import Map from "./components/map/Map";
import Home from "./components/home/Home";
import QRCamera from "./components/camera/QRcamera";
import TrashcameraPlastic from "./components/camera/TrashCameraPlastic";
import TrashcameraGlass from "./components/camera/TrashCameraGlass";
import TrashcameraMetal from "./components/camera/TrashCameraMetal";
import TrashcameraPaper from "./components/camera/TrashCameraPaper";
import TrashcameraTrash from "./components/camera/TrashCameraTrash";
import Store from "./components/store/Store";
import ActivityReport from "./components/myUseReport/MyUseReport";
import TrashcameraMedical from "./components/camera/TrashCameraMedical";
import Benefit from "./components/benefit/Benefit";
import Ranking from "./components/ranking/Ranking";
import InviteFriends from "./components/inviteFriends/InviteFriends";
import Notice from "./components/notice/Notice";
import Qna from "./components/qna/Qna";
import RedirectPage from "./components/landingPage/RedirectPage";
import Setting from "./components/setting/Setting"
import { AnimatePresence } from "framer-motion";

function App() {
  const memberId = localStorage.getItem("memberId");

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/oauth/redirected/google" element={<RedirectPage />} />
          {memberId && (
            <>
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/point" element={<Point />} />
              <Route path="/map" element={<Map />} />
              <Route path="/home" element={<Home />} />
              <Route path="/qrcamera" element={<QRCamera />} />
              <Route path="/trashcamera/glass" element={<TrashcameraGlass />} />
              <Route path="/trashcamera/plastic" element={<TrashcameraPlastic />} />
              <Route path="/trashcamera/metal" element={<TrashcameraMetal />} />
              <Route path="/trashcamera/paper" element={<TrashcameraPaper />} />
              <Route path="/trashcamera/trash" element={<TrashcameraTrash />} />
              <Route path="/trashcamera/medical" element={<TrashcameraMedical />} />
              <Route path="/benefit" element={<Benefit />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/store" element={<Store />} />
              <Route path="/activity-report" element={<ActivityReport />} />
              <Route path="/invite-friends" element={<InviteFriends />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/qna" element={<Qna />} />
              <Route path="/setting" element={<Setting />} />
            </>
          )}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
