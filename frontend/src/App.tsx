import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import News from "./components/News/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/leaderboard" replace />} />
        <Route path="/news" element={<News />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
