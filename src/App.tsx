import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NavBar from './components/Navbar';
import Candidate from './components/Candidate';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/candidate" element={<Candidate />} />
      </Routes>
    </Router>
  );
};

export default App;
