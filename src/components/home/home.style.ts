import styled from "@emotion/styled";

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
        background:url('/pharm-app/images/ico-arr.png');
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