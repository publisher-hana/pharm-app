/** @jsxImportSource @emotion/react */
import { ClampText, Container, FilterLine, LeftContent, TopCont } from "@/styles/common.style"
import { CommunityList, CommunityStyle } from "./community.style"
import { BtnMore } from "@/components/form/form.style"
import Aside from "@/common/Aside"
import { Link } from "react-router-dom"

const Community = () => {
  return (
    <>
      <TopCont>
          <h2 className="live-replay menu-title">1분 순삭!트렌드 <span className="icon"><img src='/pharm-app/images/title/icon_replay.png' alt="리플레이" /></span></h2>
          <p className="desc">바쁜 약사님들을 위한 1분 정보 콘텐츠</p>
      </TopCont>
      <Container>
        <LeftContent>
          <CommunityStyle>
            <FilterLine>
              <strong className="title">전체(156)</strong>
              <div className="sort">
                <button className="on">최신순</button>
                <button>조회순</button>
              </div>
            </FilterLine>
            <CommunityList>
              <li>
                <Link to="/community/boardview">
                  <figure>
                    <img src="/pharm-app/images/community-thum.jpg" alt="커뮤니티" />
                  </figure>
                  <div className="content">
                    <div className="top-row">
                        <span>카테고리명</span>
                        <div className="sort">
                          <span>2022-08-11</span>
                          <span>조회수 <span className="point">242</span></span>
                        </div>
                    </div>
                    <strong className="title" css={ClampText.line1}>반려동물 시술에 대한 교육자료 공유</strong>
                    <p>미국 항공우주국 홈페이지에 들어가면 누구나 허블 우주 망원경으로 관측해 촬영한 장엄한 우주 사진을 볼 수 있다. 장엄한 우주 사진을 볼 수 있다.</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/community/boardview">
                  <figure>
                    <img src="/pharm-app/images/community-thum.jpg" alt="커뮤니티" />
                  </figure>
                  <div className="content">
                    <div className="top-row">
                        <span>카테고리명</span>
                        <div className="sort">
                          <span>2022-08-11</span>
                          <span>조회수 <span className="point">242</span></span>
                        </div>
                    </div>
                    <strong className="title" css={ClampText.line1}>반려동물 시술에 대한 교육자료 공유</strong>
                    <p>미국 항공우주국 홈페이지에 들어가면 누구나 허블 우주 망원경으로 관측해 촬영한 장엄한 우주 사진을 볼 수 있다. 장엄한 우주 사진을 볼 수 있다.</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/community/boardview">
                  <figure>
                    <img src="/pharm-app/images/community-thum.jpg" alt="커뮤니티" />
                  </figure>
                  <div className="content">
                    <div className="top-row">
                        <span>카테고리명</span>
                        <div className="sort">
                          <span>2022-08-11</span>
                          <span>조회수 <span className="point">242</span></span>
                        </div>
                    </div>
                    <strong className="title" css={ClampText.line1}>반려동물 시술에 대한 교육자료 공유</strong>
                    <p>미국 항공우주국 홈페이지에 들어가면 누구나 허블 우주 망원경으로 관측해 촬영한 장엄한 우주 사진을 볼 수 있다. 장엄한 우주 사진을 볼 수 있다.</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/community/boardview">
                  <figure>
                    <img src="/pharm-app/images/community-thum.jpg" alt="커뮤니티" />
                  </figure>
                  <div className="content">
                    <div className="top-row">
                        <span>카테고리명</span>
                        <div className="sort">
                          <span>2022-08-11</span>
                          <span>조회수 <span className="point">242</span></span>
                        </div>
                    </div>
                    <strong className="title" css={ClampText.line1}>반려동물 시술에 대한 교육자료 공유</strong>
                    <p>미국 항공우주국 홈페이지에 들어가면 누구나 허블 우주 망원경으로 관측해 촬영한 장엄한 우주 사진을 볼 수 있다. 장엄한 우주 사진을 볼 수 있다.</p>
                  </div>
                </Link>
              </li>
            </CommunityList>
            <BtnMore>더보기</BtnMore>
          </CommunityStyle>
        </LeftContent>
        <Aside />
      </Container>
    </>
  )
}

export default Community