/** @jsxImportSource @emotion/react */
import { ClampText, Container, GridCol4, LeftContent, SecTitle, TopCont } from "@/styles/common.style"
import { PharmArticle, PharmSection, RecentVd, VisualPharm } from "./class.style"
import Aside from "@/common/Aside"

const Pharmvill = () => {
  return (
    <>
       <TopCont className="pd-t70">
          <VisualPharm />
      </TopCont>
      <Container>
        <LeftContent>
          <div>
            <PharmSection>
              <SecTitle>최신 영상</SecTitle> 
              <RecentVd>
                <GridCol4>
                  <div className="item">
                    <a href="#"> 
                      <span className="ico-play"></span>
                      <figure><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></figure>
                      <strong className="title" css={ClampText.line2}>Tip6. 한구열 높은 신도시에 위치한 마트안 약국</strong>
                      <p>대웅준</p>
                    </a>
                  </div>  
                  <div className="item">
                    <a href="#"> 
                      <span className="ico-play"></span>
                      <figure><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></figure>
                      <strong className="title" css={ClampText.line2}>Tip4. 신도시에 위치한 학교&amp;학원 중심가 약국</strong>
                      <p>팜톡</p>
                    </a>
                  </div>  
                  <div className="item">
                    <a href="#"> 
                      <span className="ico-play"></span>
                      <figure><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></figure>
                      <strong className="title" css={ClampText.line2}>Tip3. 먹자골목&amp; 구청&amp; 보건소 앞 40년 터줏대감 약국</strong>
                      <p>수의 기본임상시험 클래스</p>
                    </a>
                  </div>  
                  <div className="item">
                    <a href="#"> 
                      <span className="ico-play"></span>
                      <figure><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></figure>
                      <strong className="title" css={ClampText.line2}>Tip3. 먹자골목&amp; 구청&amp; 보건소 앞 40년 터줏대감 약국</strong>
                      <p>수의 기본임상시험 클래스</p>
                    </a>
                  </div>  
                </GridCol4>    
              </RecentVd>   
            </PharmSection>
            <PharmSection>
              <SecTitle>팜빌 클래스</SecTitle> 
              <PharmArticle>
                <div className="top-class-area"><span className="ico-top-class"></span></div>
                <div className="content-wrap">
                  <span className="icon"></span>
                  <div className="content">
                    <h3 className="title">판매비법</h3>
                    <p className="desc">현장에서 생생하게 담아낸 약사님들의 판매 비법과 제품에 대한 다양한 Q&A를 소개해 드립니다.</p>
                    <p className="tail">강의 <span>36</span></p>
                    <GridCol4 className="vod-area">
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></a>
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></a>
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></a>
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></a>
                    </GridCol4>
                  </div>
                </div>
              </PharmArticle>
              <PharmArticle>
                <div className="top-class-area"><span className="ico-top-class"></span></div>
                <div className="content-wrap">
                  <span className="icon qna"></span>
                  <div className="content">
                    <h3 className="title">다빈도 Q&A</h3>
                    <p className="desc">약사님들이 궁금해하시는 질문만 모아 Key point만 쏙쏙 뽑아서 설명드립니다.</p>
                    <p className="tail">강의 <span>7</span></p>
                    <GridCol4 className="vod-area">
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail2.jpg" alt="팜빌 클래스 vod" /></a>
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail2.jpg" alt="팜빌 클래스 vod" /></a>
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail2.jpg" alt="팜빌 클래스 vod" /></a>
                      <a href="#"><img src="/pharm-app/images/vod/pharm-class-thumnail2.jpg" alt="팜빌 클래스 vod" /></a>
                    </GridCol4>
                  </div>
                </div>
              </PharmArticle>
            </PharmSection>
          </div>
        </LeftContent>
         <Aside />
      </Container>
    </>
  )
}

export default Pharmvill