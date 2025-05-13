import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from"./pages/Signup"
import QuizPage from './pages/QuizPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navigation from './components/nav';

const AppContent = () => {
  const location = useLocation();
  const isLoginOrRegister = ['/login', '/register', '/quiz',].includes(
    location.pathname
  );

  return (
    <>
      {!isLoginOrRegister && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/guides" element={<Home />} />
        <Route path="/leaderboard" element={<Home />} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  
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