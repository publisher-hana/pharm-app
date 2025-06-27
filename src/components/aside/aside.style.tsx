import styled from "@emotion/styled";

export const TheShopBoxStyle = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  padding:14px 20px;
  border:1px solid var(--border-gray);
  border-radius:10px;
  .ico{
    display:inline-block;
    width:36px;
    height:33px;
  }
  .right{
    strong{
      display:block;
      font-size:16px;
    }
  }
`
export const CommunityStyle = styled.div`
  .top{
     display:flex;
    align-items:center;
    justify-content:space-between;
  }
 
`

export const AsideTtitle = styled.h2`
  color:var(--c-b-base);
  font-size:18px;
`