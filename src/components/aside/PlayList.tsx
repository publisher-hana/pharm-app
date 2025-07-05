/** @jsxImportSource @emotion/react */
import { ClampText } from "@/styles/common.style"
import {  List, RecentList } from "./aside.style"
import AsideTitleArea from "./AsideTitleArea"

type PlayListProps = {
  title?: string;
  btntext?: string;
};

const PlayList = ( {title, btntext}: PlayListProps) => {
  return (
    <RecentList>
       <AsideTitleArea title={title} btntext={btntext} />
      <List>
        <li>
          <a href="#">
            <figure><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></figure>
            <div className="info">
              <strong className="title" css={ClampText.line2}>모범적인 강아지 수술사례 케이스</strong>
              <span css={ClampText.line1}>수의기본임상시험 기본</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <figure><img src="/pharm-app/images/vod/pharm-class-thumnail.jpg" alt="팜빌 클래스 vod" /></figure>
            <div className="info">
              <strong className="title" css={ClampText.line2}>강아지 부분 무릎 인공관절에 대한 케이스별 수술 2탄</strong>
              <span css={ClampText.line1}>수의기본임상시험 기본</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <figure><img src="/pharm-app/images/vod/pharm-class-thumnail2.jpg" alt="팜빌 클래스 vod" /></figure>
            <div className="info">
              <strong className="title" css={ClampText.line2}>반려동물 평균수명 증가에 따른 수의학 최신기술 총정리!</strong>
              <span css={ClampText.line1}>수의기본임상시험 기본</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <figure><img src="/pharm-app/images/vod/pharm-class-thumnail2.jpg" alt="팜빌 클래스 vod" /></figure>
            <div className="info">
              <strong className="title" css={ClampText.line2}>반려동물 평균수명 증가에 따른 수의학 최신기술 총정리!</strong>
              <span css={ClampText.line1}>수의기본임상시험 기본</span>
            </div>
          </a>
        </li>
      </List>
    </RecentList>
  )
}

export default PlayList