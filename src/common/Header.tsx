/** @jsxImportSource @emotion/react */
import { Link, useLocation } from 'react-router-dom'
import { HeaderStyle,NavStyle, HeaderRight, Search, Menu, Submenu, BtnSch } from "./comLayout.style"
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import AllMenue from "./AllMenue";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <HeaderStyle>
      <div className="header-inner">
        <NavStyle>
          <Link to="/">
            <img src='/pharm-app/images/common/logo_pharmVille.png' alt="팜빌" />
          </Link>
          <ul className="nav">
            <li>
                <Link to="/class" 
                  className={`link ${location.pathname.startsWith("/class") ? "on" : ""}`}
                >
                팜빌 세미나</Link>
                <Submenu>
                    <li>
                      <Link to="/class">라이브 세미나</Link>
                    </li>
                    <li>
                      <Link to="/class/replay">라이브 다시보기</Link>
                    </li>
                </Submenu>
            </li>
            <li><Link to="" className="link">팜빌 클래스</Link></li>
            <li><Link to="" className="link">킴스온라인</Link></li>
            <li><Link to="/news" className="link">제약뉴스</Link></li>
            <li><Link to="" className="link">커뮤니티</Link></li>
          </ul>
        </NavStyle>
        <HeaderRight>
          <span className="member"><Link to="">김팜빌약사님</Link></span>
          <Search>
            <input type="text"  className="input-sch"/>
            <BtnSch><IoIosSearch /></BtnSch>
          </Search>
          <Menu onClick={handleButtonClick} className={isActive ? "on" : ""}><span className="bar"></span></Menu>
        </HeaderRight>
        <AllMenue isActive= {isActive} />
      </div>
    </HeaderStyle>
  )
}

export default Header