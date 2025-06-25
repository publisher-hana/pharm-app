import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Header from './common/Header';
import { Main } from './pages/Main';
import './styles/global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
     <Router>
        <Header />
        <Routes>  
          <Route path='/' element={<Main />} />
        </Routes>
     </Router>
    </>
  )
}

export default App
