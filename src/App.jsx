import "./App.css";
import Home from "./components/home/Home";
import Point from "./components/point/Point";
import Benefit from "./components/benefit/Benefit";
import LandingPage from "./components/landingPage/LandingPage";
import MyPage from "./components/myPage/MyPage";
import Setting from "./components/setting/Setting";
import QRCamera from "./components/camera/QRcamera";
import Ranking from "./components/ranking/Ranking";
import Store from "./components/store/Store";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import InviteFriends from "./components/inviteFriends/InviteFriends";
import Notice from "./components/notice/Notice";
import ActivityReport from "./components/myUseReport/MyUseReport";
import Qna from "./components/qna/Qna";
import TrashcameraPlastic from "./components/camera/TrashCameraPlastic";
import TrashcameraEwaste from "./components/camera/TrashCameraEwaste";
import TrashcameraPaper from "./components/camera/TrashCameraPaper";
import TrashcameraMetal from "./components/camera/TrashCameraMetal";
import TrashCameraGlass from "./components/camera/TrashCameraGlass";
import TrashcameraMedical from "./components/camera/TrashCameraMedical";
import Map from "./components/map/Map";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/point" element={<Point />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/qrcamera" element={<QRCamera />} />
          <Route path="/benefit" element={<Benefit />} />
          <Route path="/qrcamera" element={<QRCamera />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/store" element={<Store />} />
          <Route path="/invite-friends" element={<InviteFriends />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/activity-report" element={<ActivityReport />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/trashcamera/glass" element={<TrashCameraGlass />} />
          <Route path="/trashcamera/plastic" element={<TrashcameraPlastic />} />
          <Route path="/trashcamera/metal" element={<TrashcameraMetal />} />
          <Route path="/trashcamera/paper" element={<TrashcameraPaper />} />
          <Route path="/trashcamera/ewaste" element={<TrashcameraEwaste />} />
          <Route path="/trashcamera/medical" element={<TrashcameraMedical />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
