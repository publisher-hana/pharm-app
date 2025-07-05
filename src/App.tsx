import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Header from './common/Header';
import { Main } from './pages/Main';
import './styles/global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Classroom from './pages/class/Classroom';
import LiveReplay from './pages/class/LiveReplay';
import Footer from './common/Footer';
import Pharmvill from './pages/class/Pharmvill';
import Community from './pages/community/Community';
import News from './pages/community/News';
import BoardView from './pages/community/BoardView';
import NewsView from './pages/community/NewsView';
import ClassView from './pages/class/ClassView';

function App() {

  return (
    <>
     <Router>
        <Header />
        <Routes>  
          <Route path='/' element={<Main />} />
          <Route path='/class' element={<Classroom />} />
          <Route path='/class/replay' element={<LiveReplay />} />
          <Route path='/class/classview' element={<ClassView />} />
          <Route path='/news' element={<News />} />
          <Route path='/pharmvill-class' element={<Pharmvill />} />
          <Route path='/community' element={<Community />} />
          <Route path='/community/newsview' element={<NewsView />} />
          <Route path='/community/boardview' element={<BoardView />} />
        </Routes>
        <Footer />
     </Router>
    </>
  )
}

export default App
