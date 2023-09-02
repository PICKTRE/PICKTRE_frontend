import "./App.css";
import Benefit from "./components/benefit/Benefit";
import LandingPage from "./components/landingPage/LandingPage";
import MyPage from "./components/myPage/MyPage";
import Setting from "./components/setting/Setting";
import QRCamera from "./components/camera/QRcamera";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/qrcamera" element={<QRCamera />} />
          <Route path="/benefit" element={<Benefit />} />
          <Route path="/qrcamera" element={<QRCamera />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
