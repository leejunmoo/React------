import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 라우터에 연결할 페이지들
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
