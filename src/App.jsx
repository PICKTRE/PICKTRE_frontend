import "./App.css";
import MyPage from "./components/myPage/MyPage";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
