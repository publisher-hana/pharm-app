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
export const VisualPharm = styled.div`
  width:1920px;
  margin:0 auto;
  height:198px;
  background-image:url('/pharm-app/images/visual/visual-class.jpg');
`
export const PharmSection = styled.section`
  margin-bottom:80px;
  &:last-of-type{
    margin-bottom:0;
  }
`
export const RecentVd =styled.div`
  a:hover{
   .title{
    text-decoration:underline;
    }
  }
  .item{
    .ico-play{
    display:block;
    width:16px;
    height:16px;
    margin-bottom:10px;
    background-image:url('/pharm-app/images/ico/icon-play.png');
    }
     .title{
      display:block;
      margin-bottom:10px;
      font-size: 18px;
    }
    p{
      color:var(--primary-color);
      font-size: 16px;
    }
  }
  
`
export const PharmArticle = styled.article`
  margin-bottom:40px;
  padding:20px;
  background:#FBF7F1;
  .top-class-area{
    display:flex;
    justify-content:flex-end;
    .ico-top-class{
      display:flex;
      justify-content:flex-end;
      width:75px;
      height:24px;
      background:url('/pharm-app/images/ico/icon-class.png') no-repeat;
      background-size:cover;
    }
  }
  .content-wrap{
    display:flex;
    gap:16px;
    .icon{
       width:62px;
      height:62px;
      background:url('/pharm-app/images/ico/icon-class1.png') no-repeat;
      &.qna{
        background:url('/pharm-app/images/ico/icon-class2.png') no-repeat;
      }
    }
    .content{
      .title{
        font-size:20px;
      }
      .desc{
        font-size:14px;
        color:var(--c-gray);
      }
      .tail{
        font-size:12px;
        color:var(--c-gray);
        span{
          font-weight:bold;
        }
      }
      .vod-area{
        margin-top:20px;
      }
    }
  }
`
export const Video = styled.div`
  width:100%;
  height:487px;
  overflow:hidden;
  margin-bottom:var(--base-gap);
  iframe{ 
    width:100%;
    height:100%;
  }
`   
export const VodTitle = styled.div`
  margin-bottom:20px;
  .cate{
    --h:26px;
    padding:0px 10px;
    line-height:24px;
    font-size:16px
    font-weight:600;
  }
  h3{
    margin:8px 0;
    font-size:24px;
    font-weight:500;
  }
  .hash span{
    display:inline-block;
    margin-right:4px;
    font-size:14px;
    font-weight:400;
    color:var(--c-gray);
  }
`
export const VodCont = styled.ul`
  em{
    color:var(--c-gray);
    margin-right:12px;
    font-size:14px;
  }
  span{
    font-size:14px;
    a{
      text-decoration:underline;
    }
  }
  `
  export const ProList = styled.ul`
  position:relative;
  margin-top:var(--base-gap);
  border-top:1px solid var(--border-gray);
  & >li{
    position:relative;
    height:122px;
    padding:20px 0;
    border-bottom:1px solid var(--border-gray);
    overflow:hidden;
    figure{
      flex-shrink:0;
      width:121px;
      height:117px;
      overflow:hidden;
    }
    &.open{
      height:auto;
    }
  }
`
export const ProfileStyle = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
`

export const ListInfo = styled.div`
  strong{
    display:block;
    margin-bottom:4px;
    font-size:20px;
    font-weight:400;
  }
  .belong{
    display:block;
    margin-bottom:18px;
    font-size:14px;
    color:var(--c-gray);
  }
  .info-list{
    color:var(--c-gray);
    &>li{
      font-size:14px;
      span{
        margin-left:10px;
        color:var(--primary-color);
      }
      ul{
        margin-top:10px;
      }
    }
  }
`
export const BtnToggle = styled.button`
   position:absolute;
   bottom:20px;
   right:20px;
   &:after{
    content:"";
    display:inline-block;
    width:8px;
    height:8px;
    margin-top:-8px;
    margin-left:6px;
    vertical-align:middle;
    border-left:1px solid #000;
    border-bottom:1px solid #000;
    transform:rotate(-45deg);
   }
  &.open:after{
   margin-top:2px;
   transform:rotate(135deg);
  }
`
export const ProIntroBox = styled.div`
  margin:40px 0px 20px;
  border:1px solid var(--border-gray);
  padding:40px 20px;
  .program-list{
    padding:30px;
    background:#F2F2F2;
    font-size:14px;
    .time{
      margin-right:20px;
      letter-spacing:-0.06rem;
      color:var(--primary-color);
      text-decoration:underline;
    }
  }
`
export const FavRow = styled.div`
  text-align:center;
  .num{
    font-size:14px;
  }
`

export const Guidebox = styled.div`
  margin:20px 0px 40px;
  padding:20px;
  border:1px solid var(--border-gray);
  font-size:16x;
  strong{
    display:block;
    position:relative;
    margin-bottom:12px;
    padding-left:28px;
    font-size:18px;
    &:before{
      content:"";
      position:absolute;
      top:50%;
      left:0;
      width:18px;
      height:18px;
      transform:translateY(-50%);
      background-image:url('/pharm-app/images/ico_common.png');
      background-position:-32px -117px;
      background-repeat:no-repeat;
    }
  }
`