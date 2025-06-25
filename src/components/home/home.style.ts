import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MainSection = styled.section`
    position:relative;
    margin-bottom:40px;
    .slick-arrow{
        top:-30px;
        right:110px;
        left:auto;
        width:30px;
        height:30px;
        text-align:center;
        border:1px solid #D1D1D1;
        border-radius:50%;
    }
    .slick-arrow.slick-prev{
        right:160px;
    }
    .slick-arrow:before{
        content:"";
        display:inline-block;
        width:7px;
        height:13px;
        background:url('/pharm-app/images/common/ico-arr.png');
        color:#000;
    }
    .slick-arrow.slick-prev:before{
        transform: rotate(178deg);
        margin-left:-2px;
    }    
    .slick-arrow.slick-next:before{
        margin-left:2px;
    }
  
    
`
export const BtnAll = styled.button`
    position:absolute;
    top:12px;
    right:10px;
    padding:2px 4px;
    background:#fff;
    border:1px solid var(--border-gray);
    color:var(--c-gray);
    font-size:12px;
`
export const AcademyCard = styled.div<{ bgColor?: string }>`
    width:256px;
    height:338px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    padding:20px;
    background:#FBF9F6;
    box-sizing: border-box;
    text-align:center;
    background: ${({ bgColor }) =>
    bgColor === 'lightgreen' ? '#E6F2E8' : '#FBF9F6'};
    .top{
        display:flex;
        justify-content:center;
        width:100%;
        padding-bottom:20px;
        border-bottom: 1px solid #D9E3DD;
        .label-class{
            display:block;
            width:76px;
            height:23px;
        }
        .label-package{
            display:block;
            width:154px;
            height:26px;
        }
    }
    .thumnail{
        width:110px;
        height:110px;
        }
    .info{
        color:var(--c-gray);
        font-size:14px;
        .title{
            display:block;
            color:#1F1F1F;
            font-size:16px;
            margin:6px 0;
        }
        .lecture-count{
             span{
            font-weight:bold}
        }
       
    }
   
`
interface VodCardProps {
  type?: string;
}
export const VodCard =styled.div<VodCardProps>`
${({ type }) => type === "recomm" &&
  ` 
    margin-bottom:20px;
  `}
padding:6px;
box-sizing:border-box;  
.info{
    strong{
      display:block;
      margin:10px 0;
      overflow: hidden;
      text-overflow: ellipsis;  
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .org{
      margin-bottom:6px;
      color:var(--c-gray);
    }
    .time{
      font-size:14px;
      color:var(--c-gray);
    }
    .label{
      margin-top:10px;
      span{
        display:inline-block;
        width:48px;
        margin-left:4px;
        padding:2px 4px;
        background:#E8E8F3;
        color:#888;
        border-radius:2px;
        font-size:14px;
        font-weight:500;
       
        text-align:center;
        box-sizing:border-box;
        &:first-of-type {
          margin-left: 0;
          color:var(--c-gray);
          background:#fff;
          border:1px solid var(--c-gray);
        }
      }
    }
  }
`
export const GridCol3= styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr); 

`
export const PickStyle = styled.div`
  margin-top:20px;
  margin-bottom:40px;
  strong{
    margin-right:6px;
    color:var(--primary-color);
    vertical-align:middle;
    font-size:20px;
    font-weight:700;
    font-style:italic;
  }
  a{
    margin-left:14px;
  }
`   
interface LabelProps {
  $mode?: "gradient" | "orange" | "boldGreen" | "gray" | "lineGray";
}
export const RoundStyle = styled.span<LabelProps>`
  display:inline-block;
  --h:22px;
  font-size:1.2rem;
  height:var(--h,22px);
  line-height:var(--h,22px);
  vertical-align:middle;
  padding:0 8px;
  border-radius:var(--bd-radius);
  color:#fff;
  box-sizing:border-box;
  transition: var(--trans-3s);
  font-size:14px;
  & + span{
    margin-left:4px;
  }
  &.en {
    line-height: 20px;
  }
  ${(props) => {
    switch (props.$mode) {
      case "gradient":
        return css`
         background:var(--c-gradient);
        `;
      case "orange":
        return css`
          background:var(--c-orange);
        `;
      case "boldGreen":
        return css`
          background:var(--c-boldgreen);
        `;
      case "gray":
        return css`
          background:#e6e6e6;
          color:var(--c-b-base);
          &:hover {
            background: #d4d4d4;
          }
        `;
      case "lineGray":
        return css`
          color:var(--c-light-gray);
          border:1px solid var(--c-light-gray);
        `
      default:
        return css`
          color:var(--primary-color);
          border:1px solid var(--primary-color);
      `;
    }
  }}
`
