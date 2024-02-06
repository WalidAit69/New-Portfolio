import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Work from './pages/Work';
import Header from './components/header';
import useHeaderStore from './store/headerStore';
import WorkDetail from './pages/WorkDetail';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:title" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
