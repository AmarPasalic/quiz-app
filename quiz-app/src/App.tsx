
import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/nav'
const AppContent = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/guides" element={<Home />} />
        <Route path="/leaderboard" element={<Home/>} />
        <Route path="/quiz" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;