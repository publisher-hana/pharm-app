/** @jsxImportSource @emotion/react */
import Aside from "@/common/Aside"
import { ClampText, Container, LeftContent, ListCol2, TopCont } from "@/styles/common.style"
import SchDataInput from "@/components/form/SchDataInput";
import SchInput from "@/components/form/SchInput";
import Visual from "@/components/layout/Visual";
import { SchGrp } from "../class/class.style";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <TopCont className="pd-t70">
         <Visual />
      </TopCont>
      <Container>
        <LeftContent>
          <SchGrp>
            <div className="col"><SchDataInput /></div>
            <div className="col flex-1"><SchInput /></div>
          </SchGrp>
          <ListCol2>
            <li>
              <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>'길고양이 TNR, 마당개 중성화 문제 많다' 수의사회 보이콧 움직임</Link></div>
            </li>
            <li>
               <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>美 FDA가 ‘신속 심사’ 지정한 대웅제약 신약 후보물질은?</Link></div>
            </li>
            <li>
               <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>대웅펫-브이원바이오, ‘건강견 유래 유산균 영양제 개발 MOU’ 체결</Link></div>
            </li>
            <li>
               <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>마이클 켄트 UC DAVIS 교수는 방사선 치료를 주제로 작용 원리와 치료계획 수립, 예후를 함께 조명하다</Link></div>
            </li>
            <li>
              <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>'길고양이 TNR, 마당개 중성화 문제 많다' 수의사회 보이콧 움직임</Link></div>
            </li>
            <li>
               <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>美 FDA가 ‘신속 심사’ 지정한 대웅제약 신약 후보물질은?</Link></div>
            </li>
            <li>
               <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>대웅펫-브이원바이오, ‘건강견 유래 유산균 영양제 개발 MOU’ 체결</Link></div>
            </li>
            <li>
               <span className="date">2022-01-26</span>
              <div className="title"><Link to="/community/newsview" css={ClampText.line1}>마이클 켄트 UC DAVIS 교수는 방사선 치료를 주제로 작용 원리와 치료계획 수립, 예후를 함께 조명하다</Link></div>
            </li>
          </ListCol2>
        </LeftContent>
        <Aside />
      </Container>
    </>
  )
}

export default News