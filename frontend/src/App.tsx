import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import News from "./components/News/News";
import Insights from "./components/Insights/Insights";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/leaderboard" replace />} />
        <Route path="/news" element={<News />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
