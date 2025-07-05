/** @jsxImportSource @emotion/react */
import { ClampText, Container, LeftContent, SecTitle, TopCont } from "@/styles/common.style"
import { FavRow, Guidebox, ProIntroBox, ProList, Video, VisualPharm, VodCont, VodTitle } from "./class.style"
import Aside from "@/common/Aside"
import { RoundStyle } from "@/components/home/home.style"
import ProItem from "@/components/class/ProItem"
import FavIco from "@/components/layout/FavIco"
import { useState } from "react"

const ClassView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <TopCont className="pd-t70">
          <VisualPharm />
      </TopCont>
      <Container>
        <LeftContent>
          <SecTitle>팜빌 클래스</SecTitle>
          <div className="content">
            <Video>
              <iframe src="https://www.youtube.com/embed/MjS4x2JOEYQ" />
            </Video>
            <VodTitle>
              <RoundStyle className='cate'>심혈관 질환</RoundStyle>
              <h3 css={ClampText.line2}>순환기(인터벤션)반려동물의 아토바스타틴/에제티미브 효능 및 임상적 데이터 데이터 리뷰와 효능에 관한 강좌</h3>
              <div className="hash"><span>#협심증</span><span>#심근경색</span><span>#동맥경색</span></div>
            </VodTitle>
            <VodCont>
              <li>
                <em>영상 제공기간</em>
                <span>2022.01.26~2023.01.26</span>
              </li>
              <li>
                <em>강의자료</em>
                <span className='file'><a href='#'>첨부파일명.pdf</a>/<a href='#'>첨부파일명.pdf</a></span>
              </li>
              <li>
                <em>다시보기</em>
                <span>제공하지 않음</span>
              </li>
            </VodCont>
             <ProList>
              <ProItem />
              <ProItem />
            </ProList>
            <ProIntroBox>
              <ul className='program-list'>
                <li>
                  <em className='time'>00:25</em><span>강의 소개</span>
                </li>
                <li><span className="time">00:46</span><span>Idiopathic 란?</span></li>
                <li><span className="time">02:36</span><span>Outflow tract of Ventricle</span></li>
                <li><span className="time">03:21</span><span>Bundle branch block pattern</span></li>
                <li><span className="time">04:10</span><span>Axis</span></li>
              </ul>
              <div>
                 <img src="/pharm-app/images/profile_img.jpg"alt='' />
              </div>
            </ProIntroBox>
            <FavRow>
              <FavIco className={isOpen ? "on" : ""}
                onClick={handleToggle}
              />
              <span className="num">15</span>
            </FavRow>
            <Guidebox>
              <strong>화면이 자꾸 끊기시나요?</strong>
              <p>- 네트워크 상태가 불안정할 경우, 화면이 끊길 수 있습니다.</p>
            </Guidebox>
          </div>
        </LeftContent>
        <Aside />
      </Container>
    </>
  )
}

export default ClassView