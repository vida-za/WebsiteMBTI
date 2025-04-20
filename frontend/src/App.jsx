import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MbtiTest from './pages/MbtiTest';
import EnneaTest from './pages/EnneaTest';
import './App.css'

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mbti" element={<MbtiTest/>}/>
            <Route path="/ennea" element={<EnneaTest/>}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App;