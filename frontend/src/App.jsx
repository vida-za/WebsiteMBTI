import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Tests from './pages/Tests';
import Profile from './pages/Profile';
import History from './pages/History';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Tests />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App