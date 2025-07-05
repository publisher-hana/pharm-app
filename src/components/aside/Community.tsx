/** @jsxImportSource @emotion/react */
import { CommunityStyle } from "./aside.style"
import { Link } from "react-router-dom"
import { ClampText, HoverType} from "@/styles/common.style"
import AsideTitleArea from "./AsideTitleArea"
const Community = () => {
  return (
    <CommunityStyle>
      <AsideTitleArea title="커뮤니티 베스트 글" btntext="전체보기" />
      <ul className="cont">
        <li>
          <Link to="/" css={HoverType.underline}>
            <strong>자꾸만 아이에게 화를 내는 나, 계속 일을 해야겠습니다.</strong>
            <p css={ClampText.line1}>자꾸만 아이에게 화를 내는 봉직의입니다. 이번에는 아이에게 잘 해야겠습니다.</p>
            <div className="tail">
              <span>1,856</span>
              <span className="favorite">27</span>
              <span className="answer">6</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" css={HoverType.underline}>
            <strong>배우자를 믿으시나요?</strong>
            <p css={ClampText.line1}>가끔씩 그런 생각을 합니다. 그렇다고 배우자가 나를 위해 노력할까요?</p>
            <div className="tail">
              <span>1,856</span>
              <span className="favorite">27</span>
              <span className="answer">6</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" css={HoverType.underline}>
            <strong>10년 뒤 한국은 어떨까요?</strong>
            <p css={ClampText.line1}>선생님은 어느 초등학교를 나오셨나요? 사실 저는 초등학교를 나오지 않았습니다.</p>
            <div className="tail">
              <span>1,856</span>
              <span className="favorite">27</span>
              <span className="answer">6</span>
            </div>
          </Link>
        </li>
      </ul>
    </CommunityStyle>
  )
}

export default Community