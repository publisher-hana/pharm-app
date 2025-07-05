import styled from "@emotion/styled";

export const CommunityStyle = styled.div`
`
export const CommunityList = styled.ul`
  li{
    padding:30px 10px;
    border-bottom:1px solid var(--border-gray);
  }
  a{
    display:flex;
    align-items:center;
    gap:30px;
    &:hover{
      .title{
        text-decoration:underline;
      }
    }
  }
  figure{
    flex-shrink:0
    width:142px;
    height:100px;
  }
  .content{
    flex-shrink:0;
    width:calc(100% - 142px - 30px);
    .top-row{
      width:100%;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .sort{
        span{
          position:relative;
          color:var(--c-gray);
          padding:0 10px;
          .point{
            padding:0;
            font-weight:bold;
          }
          &+ span:before {
            content: "";
            position: absolute;
            top:50%;
            transform:translateY(-50%);
            left:0;
            width: 1px;
            height: 10px;
            background-color: var(--c-gray);
          }
        }
      }
    }
    .title{
      display:block;
      margin-bottom:10px;
      font-size:20px;
    }
  }
`

export const ViewHeader = styled.div`
  padding:30px 0px;
  border-top:1px solid #000;
  border-bottom:1px solid var(--border-gray);
  h2{
    margin-bottom:26px;
    font-size:28px;
  }
`
export const InfoRow = styled.div`
   font-size:14px;
  color:var(--c-gray);
  span + span:before{
    content:"";
    display:inline-block;
    width:1px;
    height:10px;
    margin-left:8px;
    margin-right:6px;
    background:var(--c-gray);
  }
  span.on{
    font-weight:bold;
  }
`
export const ViewBody = styled.div`
  line-height:1.8;
  padding:30px 0px 60px;
  font-size:16px;
  border-bottom:1px solid var(--border-gray);
  p{
    margin-bottom:10px;
  }
  strong{
    display:block;
    margin-top:10px;
  }
  &.board strong{
    padding-top:10px;
    padding-bottom:10px;
  }
`
export const BtnGroups = styled.div`
  margin-top:20px;
  text-align:right;
  button{
    position:relative;
    padding:0 20px;
    line-height:30px;
    border:1px solid var(--border-gray);
  }
  button+button{
    margin-left:6px;
  }
`