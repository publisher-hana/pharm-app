import { Link } from 'react-router-dom'
import { AllMenuStyle } from './comLayout.style';
export interface AllMenuProps{
  isActive ?: boolean;
}

const AllMenue = ({isActive} : AllMenuProps) => {
  return (
    <>
      <AllMenuStyle className={isActive ? "on" : ""}>
       <div className='allmenu-inner'>
          <div className="col">
            <h2>팜빌 세미나</h2>
            <ul>
              <li>
                <Link to="/class">라이브 다시보기</Link>
              </li>
              <li>
                <Link to="/class/live">라이브세미나</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>팜빌 클래스</h2>
            <ul>
              <li>
                <Link to="/library">약국경영</Link>
              </li>
              <li>
                <Link to="/library/reportsch">복약지도</Link>
              </li>
              <li>
                <Link to="/library/reportsch">매약비법</Link>
              </li>
              <li>
                <Link to="/library/reportsch">다빈도 Q&A</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2><Link to="/">설문</Link></h2>
          </div>
          <div className="col">
            <h2><Link to="/">킴스 온라인</Link></h2>
          </div>
          <div className="col">
            <h2><Link to="/">커뮤니티</Link></h2>
          </div>
          <div className="col">
            <h2><Link to="/">해외학회스케치</Link></h2>
          </div>
          <div className="col">
            <h2><Link to="/">학술지원사업</Link></h2>
          </div>
          <div className="col">
            <h2><Link to="/">빌마켓</Link></h2>
          </div>
        </div>
      </AllMenuStyle>
    </>
  )
}

export default AllMenue