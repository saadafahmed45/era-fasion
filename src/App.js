import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './Components/Home/HomeMain/HomeMain';

function App() {
  return (
    <div className="App">
   <Routes>
        <Route path="/" element={<HomeMain/>} />
        {/* <Route path="about" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
