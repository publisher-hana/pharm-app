/** @jsxImportSource @emotion/react */
import Aside from "@/common/Aside"
import { Detail, IcoLabel, LiveTable } from "@/pages/class/class.style"
import { RoundStyle } from "@/components/home/home.style"
import { TopCont, Container, LeftContent, ClampText } from "@/styles/common.style"
import { Link } from "react-router-dom"

const Classroom = () => {
  return (
    <>
      <TopCont>
          <h2 className="live-seminar"><img src='/pharm-app/images/title/title-live-seminar.png' alt="라이브 세미나" /></h2>
          <p className="desc">유명 연자들의 생생한 라이브 세미나를 어디서든 편하게 보실 수 있습니다.</p>
      </TopCont>
      <Container>
        <LeftContent>
         <LiveTable>
            <div className="top">
              <span><IcoLabel className="ico">S</IcoLabel>세미나</span>
              <span><IcoLabel $mode='lightgreen' className="ico">W</IcoLabel>웹 심포지움</span>
            </div>
            <table>
              <caption>세미나 편성표 표</caption>
              <colgroup>
                <col width="93px" />
                <col width="84px" />
                <col width="623px" />
              </colgroup>
              <tbody>
                <tr>
                  <th rowSpan={2} scope='row'>
                    <strong>7/20</strong>
                    <span className="week">월요일</span>
                  </th>
                  <td className='time'>
                    <strong>09:00</strong>
                    <span>~12:00</span>
                  </td>
                  <td className='detail'>
                    <Detail>
                      <span className='cate'>내분비질환</span>
                      <div className='title'><IcoLabel>S</IcoLabel>
                        <strong css={ClampText.line1}>[대한내분비학회] 맞춤 치료를 위한 인슐린 치료 전략 인슐린 치료 전략 린 치료 전략</strong>
                      </div>
                      <span className="presenter">최원석 교수(세종대 수의과대학)</span>
                        <RoundStyle $mode='green' className="class-lb">준비중</RoundStyle>
                    </Detail>
                    <Link to="/" className="btn">
                      <RoundStyle $mode='blue'>신청가능</RoundStyle>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className='time'>
                    <strong>09:00</strong>
                    <span>~12:00</span>
                  </td>
                  <td className='detail'>
                    <Detail>
                      <span className='cate'>호흡기질환</span>
                      <div className='title'><IcoLabel $mode='lightgreen'>W</IcoLabel>
                        <strong css={ClampText.line1}>강아지 호흡곤란 지속되는 이유에 따른 대처방법</strong>
                      </div>
                      <span className="presenter">정사람 교수(세종대 수의과대학)</span>
                        <RoundStyle $mode='orange' className="class-lb">Live</RoundStyle>
                    </Detail>
                    <Link to="/" className="btn">
                      <RoundStyle $mode='lineGray'>신청완료</RoundStyle>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th rowSpan={2} scope='row'>
                    <strong>7/21</strong>
                    <span className="week">화요일</span>
                  </th>
                  <td className='time'>
                    <strong>09:00</strong>
                    <span>~12:00</span>
                  </td>
                  <td className='detail'>
                    <Detail>
                      <span className='cate'>내분비질환</span>
                      <div className='title'><IcoLabel>S</IcoLabel>
                        <strong css={ClampText.line1}>[대한내분비학회] 맞춤 치료를 위한 인슐린 치료 전략 인슐린 치료 전략 린 치료 전략</strong>
                      </div>
                      <span className="presenter">최원석 교수(세종대 수의과대학)</span>
                        <RoundStyle $mode='green' className="class-lb">준비중</RoundStyle>
                    </Detail>
                    <Link to="/" className="btn">
                      <RoundStyle $mode='orange'>입장하기</RoundStyle>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className='time'>
                    <strong>09:00</strong>
                    <span>~12:00</span>
                  </td>
                  <td className='detail'>
                    <Detail>
                      <span className='cate'>호흡기질환</span>
                      <div className='title'><IcoLabel $mode='lightgreen'>W</IcoLabel>
                        <strong css={ClampText.line1}>강아지 호흡곤란 지속되는 이유에 따른 대처방법</strong>
                      </div>
                      <span className="presenter">정사람 교수(세종대 수의과대학)</span>
                        <RoundStyle $mode='orange' className="class-lb">Live</RoundStyle>
                    </Detail>
                    <Link to="/" className="btn">
                      <RoundStyle $mode='lineGray'>신청완료</RoundStyle>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </LiveTable>
        </LeftContent>
        <Aside />
      </Container>
    </>
  )
}

export default Classroom