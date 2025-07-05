import styled from "@emotion/styled";

export const VisualStyle = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:14px;
  height:225px;
  color:#fff;
  background:url('/pharm-app/images/visual/bg-visual.jpg');
  .title{
    font-size:36px;
  }
  .desc{
    font-size:22px;
    color:#fff;
  }
`
export const HeartIco = styled.button`
display: block;
margin: 0 auto;
width: 22px;
height: 20px;
background-image:url('/pharm-app/images/ico_common.png');
background-position: -214px -94px;
&.on {
  background-position-x: -177px;
}
`;