import { Link } from "react-router-dom"
import { HeaderStyle,NavStyle, HeaderRight, Search } from "./comLayout.style"
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-inner">
        <NavStyle>
          <Link to="/">
            <img src='/pharm-app/images/common/logo_pharmVille.png' alt="팜빌" />
          </Link>
          <ul className="nav">
            <li><Link to="">라이브세미나</Link></li>
            <li><Link to="">팜빌 클래스</Link></li>
            <li><Link to="">킴스온라인</Link></li>
            <li><Link to="">커뮤니티</Link></li>
          </ul>
        </NavStyle>
        <HeaderRight>
          <span className="member"><Link to="">김팜빌약사님</Link></span>
          <Search>
            <input type="text"  className="input-sch"/>
            <button className="btn-sch"><IoIosSearch /></button>
          </Search>

        </HeaderRight>
      </div>
    </HeaderStyle>
  )
}

export default Header