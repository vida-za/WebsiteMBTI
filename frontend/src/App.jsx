import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Tests from './pages/Tests';
import MbtiTest from './pages/MbtiTest';
import EnneaTest from './pages/EnneaTest';
import './App.css'

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Tests/>}/>
            <Route path="/mbti" element={<MbtiTest/>}/>
            <Route path="/ennea" element={<EnneaTest/>}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App;