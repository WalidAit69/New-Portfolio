import './index.css';
import './App.css';
import './App.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Work from './pages/Work';
import Header from './components/header';
import WorkDetail from './pages/WorkDetail';
import Resume from './pages/Resume';
import ResumePage from './pages/ResumePage';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:title" element={<WorkDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume.pdf" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
