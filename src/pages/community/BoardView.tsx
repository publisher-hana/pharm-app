import Aside from "@/common/Aside"
import { Container, LeftContent, TopCont } from "@/styles/common.style"
import { BtnGroups, InfoRow, ViewBody, ViewHeader } from "./community.style"

const BoardView = () => {
  return (
     <>
      <TopCont>
          <h2 className="live-replay menu-title">1분 순삭!트렌드 <span className="icon"><img src='/pharm-app/images/title/icon_replay.png' alt="리플레이" /></span></h2>
          <p className="desc">바쁜 약사님들을 위한 1분 정보 콘텐츠</p>
      </TopCont>
      <Container>
        <LeftContent>
          <ViewHeader>
            <h2>반려동물 시술에 대한 교육자료 공유</h2>
            <InfoRow>
              <span>김지환</span>
              <span>2023.09.09</span>
              <span>조회수 <span className="on">100</span></span>
            </InfoRow>
          </ViewHeader>
          <ViewBody className='board'>
            <p>안녕하세요. 베터빌입니다.</p>
            <p>벌써 22년도 4월이 시작되었습니다.^^</p>
            <p>4월 1일 새롭게 오픈한 닥터빌 서비스 안내드립니다.</p>
            <strong>베터빌 스터디룸</strong>
            <p>시간, 장소에 제한없이 닥터빌 온라인 스터디룸에서 지식을 나누세요!</p>
            <p>원하시는 날짜, 시간, 참여 인원을 설정 후 예약하시면 끝!</p>
            <p>무료로 진행되는 닥터빌 온라인 스터디룸, 많은 이용 바랍니다.</p>
          </ViewBody>
          <BtnGroups>
            <button>목록</button>
            <button className='prev'>이전글</button>
            <button className='next'>다음글</button>
          </BtnGroups>
        </LeftContent>
        <Aside />
      </Container>
      </>
  )
}

export default BoardView