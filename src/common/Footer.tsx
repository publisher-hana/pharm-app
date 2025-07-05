import { Link } from "react-router-dom";
import { Address, FamliySite, FooterStyle, SiteLink } from "./comLayout.style";
import { useState } from "react";

const Footer = () => {
   const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FooterStyle>
      <div className="footer-inner">
        <div className="footer-top">
          <Link to="/">
            <img src='/pharm-app/images/common/logo_pharmVille.png' alt="팜빌" />
          </Link>
          <FamliySite className={isOpen ? "open" : ""}>
            <div className={isOpen ? "sites open" : "sites"}>
              <a href="#" target="_blank">
                하이닥
              </a>
              <a href="#" target="_blank">
                더샵
              </a>
              <a href="#" target="_blank">
                클릭메디
              </a>
              <a href="#" target="_blank">
                해피케어
              </a>
              <a href="#" target="_blank">
                시셀
              </a>
              <a href="#" target="_blank">
                닥터빌
              </a>
            </div>
            <button className="site_box" onClick={handleToggle}>
              Family Site
            </button>
          </FamliySite>
        </div>
        <SiteLink>
          <a href="#">회사소개</a>
          <a href="#">고객센터</a>
          <a href="#">제휴문의</a>
          <a href="#">이용약관</a>
          <a href="#" className="point">
            개인정보처리방침
          </a>
        </SiteLink>
        <Address>
          <span>서울 강남구 봉은사로 114길 12 (삼성동)</span>
          <span>대표전화 : 1522-0209</span>
          <span>Fax : 02-563-8399</span>
        </Address>
        <div className="copy">
          Copyright (c)Mcircle Corp. All rights reserved.
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;