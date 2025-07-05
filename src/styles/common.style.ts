import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  max-width:1200px;
  margin:0 auto;
  padding-bottom:100px;
  &.pd-t100{
    padding-top:100px;
  }
`;  
export const TopCont = styled.div`
  padding:140px 0 80px;
  text-align:center;
  .live-seminar{
    width:294px;
    margin:0 auto;
  }
  .menu-title{
    margin-bottom:20px;
    font-size:34px;
  }
  .live-replay{
    .icon{
      display:inline-block;
      width:55px;
      height:50px;
      vertical-align:middle;
    }
  }
  .desc{
    font-size:18px;
    font-weight:500;
    color:var(--c-gray);
  }
  &.pd-t70{
    padding-top:70px;
  }
`
export const LeftContent = styled.div`
  width:800px
`
export const SecTitle = styled.h2`
  margin-bottom:16px;
  font-size:24px;
  color:var(--c-b-base);
` 
export const IcoArr = styled.span`
  display:inline-block;
  width:6px;
  height:6px;
  margin-top:-2px;
  border-right:2px solid var(--c-gray);
  border-bottom:2px solid var(--c-gray);
  transform:rotate(-45deg);
  vertical-align:middle;
`
export const ClampText = {
  line1: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  line2: css`
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    line-clamp: 2;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
     word-break:keep-all;
  `
}
export const HoverType = {
  underline:css`
    &:hover{
      strong{
        text-decoration:underline;
      } 
    }
    
  `
}

export const ListCol2 = styled.ul`
  li{
    display:flex;
    align-items:center;
    gap:20px;
    border-bottom:1px solid var(--border-gray);
    .date{
      padding:20px 10px;
      color:var(--c-light-gray);
      font-size:16px;
    }
    .title a{
      display:block;
      padding:20px 0;
      font-size:18px;
      width:640px;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`
export const GridCol4 = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:16px;
`
export const FilterLine = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-bottom:16px;
  border-bottom:2px solid var(--c-b-base);
  .title{
    font-size:16px;
    font-weight:500;
  }
  .sort{
    button{
      color:var(--c-gray);
      &.on{
        font-weight:bold;
      }
    }
  }
`