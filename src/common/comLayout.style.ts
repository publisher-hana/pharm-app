import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:70px;
  border-bottom:1px solid var(--border-gray);
  z-index:9999;
  background:#fff;
  .header-inner{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:var(--cont-width);
    margin:0 auto;
    height:100%;
  }
`
export const NavStyle = styled.div`
  display:flex;
  align-items:center;
  gap:40px;
  a:hover{
    color:var(--primary-color);
  }
  .nav{
    display:flex;
    align-items:center;
    gap:20px;
    >li{
      position:relative;  
      .link{
        font-weight:500;
        font-size:18px;
        padding:23px 0;
        &.on{
          color:var(--primary-color);
        }
      }
      &:hover ul {
        display: block;
      }

    }
      
  }
`
export const Submenu = styled.ul`
  display: none;
  position: absolute;
  top: 48px;
  left: -16px;
  min-width: 127px;
  padding: 16px;
  border: 1px solid var(--border-gray);
  transition:.2s;
  z-index:90;
  background: #fff;
  box-sizing: border-box;
  li {
    line-height: 1.8;
  }
  a {
    display: block;
    font-size:14px;
    font-weight:normal;
    text-align:left;
  }
 
`
export const HeaderRight =styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  .member{
    font-weight:500;
  }
`
export const Search = styled.div`
  position:relative;
  width:260px;
  height:var(--input-h);
  border:1px solid var(--c-blue);
  border-radius:10px;
  .input-sch{
    width:86%;
    height:100%;
    padding:10px;
    border:none;
    box-sizing:border-box;
    background:transparent;
  }
`
export const BtnSch = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  width: 40px; 
  height: 100%;
  font-size: 24px;
  color: var(--c-blue);
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AsideStyle = styled.aside`
  width:320px;
  
  section{
    margin-bottom:40px;
    &.banner{
      margin-bottom:20px;
    }
  }
`
export const Menu = styled.button`
  display:block;
  width:40px;
  height:40px;
  position:relative;
  background:var(--c-blue);
  border-radius:10px;
  &:before, &:after, .bar{
    position:absolute;  
    left:8px;
    content:'';
    height:2px;
    background:#fff;
    transition:.2s;
  }
  &:before{
    top:10px;
    width:24px;
  }
  .bar{
    top:18px;
    display:block;
    width:20px;
    height:2px;
    background:#fff;
  }
  &:after{
    top:26px;
    width:14px;
  }

  &.on {
    .bar {
      display: none;
    }
    &:before {
      top:12px;
      transform: translateY(7px) rotate(45deg);
    }
    &:after {
      top:24px;
      width: 24px;
      transform: translateY(-5px) rotate(-45deg);
    }
  }
`
export const AllMenuStyle = styled.menu`
  display: none;
  position: absolute;
  top: 71px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 80px 0;
  background-color: #fff;
  border-bottom: 1px solid var(--border-gray);
  z-index: 92;
  &.on{
    display:block;
  }

  .allmenu-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .col h2 {
    font-size: 18px;
    margin-bottom: 10px;
    a{
      font-size: 18px;
    }
  }

  .col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 6px;
      a{
        font-size:16px;
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    &:hover {
      color: var(--primary-color);
    }
  }

`