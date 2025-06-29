import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Header from './common/Header';
import { Main } from './pages/Main';
import './styles/global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Classroom from './pages/class/Classroom';
import LiveReplay from './pages/class/LiveReplay';
import News from './pages/news';

function App() {

  return (
    <>
     <Router>
        <Header />
        <Routes>  
          <Route path='/' element={<Main />} />
          <Route path='/class' element={<Classroom />} />
          <Route path='/class/replay' element={<LiveReplay />} />
          <Route path='/news' element={<News />} />
        </Routes>
     </Router>
    </>
  )
}

export default App
