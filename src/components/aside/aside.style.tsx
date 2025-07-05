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
export const TitleAreaStyle= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:16px;
    border-bottom:2px solid var(--c-b-base);
`
export const CommunityStyle = styled.div`
  .cont li a{
    margin:20px 0;
    display:flex;
    flex-direction:column;
    gap:6px;
  }
  .cont strong{
    display:block;
    font-size:18px;  
  }
  .cont p{
    font-size:16px;
    color:var(--c-gray);  
  }
  .cont .tail{
    display:flex;
    gap:10px;
    color:var(--c-gray);
    span{
       display:flex;
      align-items:center;
      &::before{
        content:"";
        width:15px;
        height:12px;
        margin-right:4px;
        background:url('/pharm-app/images/ico/icon-eye.png') no-repeat;
      }
      &.favorite:before{
        background:url('/pharm-app/images/ico/icon-fav.png') no-repeat;
      }
      &.answer:before{
        width:14px;
        height:14px;
        background:url('/pharm-app/images/ico/icon-answer.png') no-repeat;
      }
    }
  }
`
export const AsideTtitle = styled.h2`
  color:var(--c-b-base);
  font-size:20px;
  `
  export const BtnAll = styled.button`
  color:var(--c-gray);
  font-weight:500;
  font-size:14px;
   color:var(--c-b-base);
  span{
    margin-left:6px;
    vertical-align:middle;
  }
`
export const QuickStyle = styled.div`
  h2{
    margin-bottom:16px;
  }
  .quick-row a{
    position:relative;
    margin-bottom:16px;
    display:flex;
    align-items:center;
    gap:10px;
    strong{
      font-size:18px;
    }
    span{
      color:var(--c-gray);
      font-size:16px;
    }
  }
  .quick-row a{
    &:before{
      display:inline-block;
      content:"";
      width:18px;
      height:15px;
      background-image:url('/pharm-app/images/ico/icon-ques.png');
      background-repeat:no-repeat;
      background-size:cover;
    }
    &.propose:before{
      width:18px;
      height:16px;
      background-image:url('/pharm-app/images/ico/icon-propose.png');
    }
    &.notice:before{
      width:17px;
      height:18px;
      background-image:url('/pharm-app/images/ico/icon-notice.png');
    }
    .ico-arr{
      position:absolute;
      right:0;
      border-color:var(--c-b-base);
      border-width:2px;
    }
      
  }
`
export const RecentList = styled.div`
  margin-bottom:40px;
`
export const List = styled.ul`
  padding-top:10px;
  li{
    margin:10px 0;
    a{
      display:flex;
      align-items:center;
      gap:16px;
      &:hover{
        .title{
          text-decoration:underline;
        }
      }
    }
    figure{
      width:90px;
      height:54px;
      flex-shrink: 0;
      img{
        object-fit: cover; 
        display: block;
      }
    }
    .info{
      .title{
        display:block;
        font-size:13px;
      }
      span{
        display:block;
        font-size:12px;
        color:var(--c-gray);
      }
    }
  }
`