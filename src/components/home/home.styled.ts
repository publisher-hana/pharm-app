import styled from "@emotion/styled";

export const AcademyMain = styled.div`
    .slick-slide {
        padding: 0 8px; 
        box-sizing: border-box;
    }
    
`
export const AcademyCard = styled.div<{ bgColor?: string }>`
    width:230px;
    height:338px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    background:#FBF9F6;
    box-sizing: border-box;
    background: ${({ bgColor }) =>
    bgColor === 'lightgreen' ? '#E6F2E8' : '#FBF9F6'};
    .top{
        display:flex;
        justify-content:center;
        padding-bottom:16px;
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
`