import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Work from './pages/Work';
import Header from './components/header';
import useHeaderStore from './store/headerStore';


function App() {
  const { colorChange, logoChange, isHome, setColorChange, setLogoChange, setisHome } = useHeaderStore();

  return (
    <BrowserRouter>
      <Header Colorchange={colorChange} Logochange={logoChange} isHome={isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work setisHome={setisHome} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
