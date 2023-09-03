import "./App.css";
import Home from "./components/home/Home";
import Benefit from "./components/benefit/Benefit";
import LandingPage from "./components/landingPage/LandingPage";
import MyPage from "./components/myPage/MyPage";
import Setting from "./components/setting/Setting";
import QRCamera from "./components/camera/QRcamera";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import InviteFriends from "./components/inviteFriends/InviteFriends";
import ActivityReport from "./components/myUseReport/MyUseReport";
import TrashcameraPlastic from "./components/camera/TrashCameraPlastic";
import TrashcameraEwaste from "./components/camera/TrashCameraEwaste";
import TrashcameraPaper from "./components/camera/TrashCameraPaper";
import TrashcameraMetal from "./components/camera/TrashCameraMetal";
import TrashCameraGlass from "./components/camera/TrashCameraGlass";
import TrashcameraMedical from "./components/camera/TrashCameraMedical";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/qrcamera" element={<QRCamera />} />
          <Route path="/benefit" element={<Benefit />} />
          <Route path="/qrcamera" element={<QRCamera />} />
          <Route path="/invite-friends" element={<InviteFriends />} />
          <Route path="/activity-report" element={<ActivityReport />} />
          <Route path="/trashcamera/glass" element={<TrashCameraGlass />} />
          <Route path="/trashcamera/plastic" element={<TrashcameraPlastic />} />
          <Route path="/trashcamera/metal" element={<TrashcameraMetal />} />
          <Route path="/trashcamera/paper" element={<TrashcameraPaper />} />
          <Route path="/trashcamera/ewaste" element={<TrashcameraEwaste />} />
          <Route path="/trashcamera/medical" element={<TrashcameraMedical />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
