import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import MyPage from "./components/myPage/MyPage";
import Setting from "./components/setting/Setting";
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
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
