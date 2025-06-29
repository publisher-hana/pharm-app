import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const LiveTable = styled.div`
 .top{
  display:flex;
  gap:14px;
  font-weight:500;
  .ico{
    margin-right:6px;
  }
 }
  table{
    margin-top:20px;
    border-top:1px solid #000;
    th,td{
      padding:28px 4px;
      font-size:20px;
      vertical-align:top;
      text-align:center;  
      line-height:1.2;
      strong{
        display:block;
      }
    }
    th{
      span{
        font-weight:400;
      }
    }
    td.time{
      color:#6B93D4;
      background:#ECF0F9;
    }
    td.detail{
      display:flex;
      justify-content:space-between;
      gap:10px;
      padding:28px 16px;
      text-align:left;
      border-bottom:1px solid var(--border-gray);
    }
    tr:nth-of-type(even) .time{
      color:#45C1A2;
      background:#EAF8F5;
    }
    .btn{
      margin-top:34px;
      width:100px;
      height:34px;
      span{
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:100%;
        font-weight:bold;
        font-size:16px;
      }
    }
  }
  
`
export const Detail = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  .cate{
    display:block;
    color:var(--c-blue-strong);
     font-size:14px;
  }
  .title{
    display:flex;
    align-items:center;
    gap:10px;
    span{
      flex-shrink:0;
    }
    strong{
      width: 440px;
      font-size:20px;
    }
  }
  .presenter{
    color:var(--c-gray);
    font-size:16px;
  }
  .class-lb{
    width:50px;
    height:20px;
    line-height:20px;
    font-size:12px;
  }
`
interface LabelProp {
   $mode?: "lightgreen";
}
export const IcoLabel = styled.span<LabelProp>`
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 16px;
  color: #ff6879;
  text-align: center;
  box-sizing: border-box;
  vertical-align: middle;
  font-style: normal;
  font-size:18px;
  font-weight:700;
   ${(props) => {
    switch (props.$mode) {
      case "lightgreen":
        return css`
          color: #01EB3D;
        `;
    }
  }}
 
`
export const SchGrp = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  margin-bottom:40px;
  padding-bottom:20px;
  border-bottom:2px solid var(--c-b-base);
  .col{
    position: relative;
    padding-left:8px;
    &>*{
      position: relative;
      height: 34px;
      font-size:18px;
      box-sizing: border-box;
    }
    &:first-of-type:before{
      display:none;
    }
    &:before {
      content: "";
      position:absolute;
      display: block;
      width: 1px;
      height: 10px;
      background: #111;
      left: 0;
      top:50%;
      transform:translateY(-50%);
    }
    &.flex-1{
      flex:1;
    }
  }
  .select{
    width:14%;
  }
 
`