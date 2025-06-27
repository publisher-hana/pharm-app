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
    width:1200px;
    height:100%;
    margin:0 auto;
  }
`
export const NavStyle = styled.div`
  display:flex;
  align-items:center;
  gap:30px;
  .nav{
    display:flex;
    align-items:center;
    gap:16px;
    a{
      font-weight:500;
    }
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
  .btn-sch{
    position:absolute;
    top:4%;
    right:10px;
    font-size:24px;
    color:var(--c-blue);
  }
`
export const AsideStyle = styled.aside`
  width:320px;
  
  section{
    margin-bottom:40px;
  }
`
