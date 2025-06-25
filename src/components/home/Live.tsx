import { GridCol3, MainSection, VodCard } from './home.style'
import { Link } from 'react-router-dom'
import { SecTitle } from '@/styles/common.style'

const Live = () => {
   const liveList = [
    {
      id: 1,
      labels: ["학술", "온라인"],
      title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
      org: "정주현 원장 (일산동물의료원)",
      time: "2023-01-19(수) 20:00 ~ 21:00",
      thumbnail: "/pharm-app/images/vod/live-thumnail1.png",
      link: "",
    },
    {
      id: 2,
      labels: ["학술", "온라인"],
      title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다.암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
      org: "정주현 원장 (일산동물의료원)",
      time: "2023-01-19(수) 20:00 ~ 21:00",
      thumbnail: "/pharm-app/images/vod/live-thumnail2.png",
      link: "",
    },
    {
      id: 3,
      labels: ["학술", "온라인"],
      title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
      org: "정주현 원장 (일산동물의료원)",
      time: "2023-01-19(수) 20:00 ~ 21:00",
      thumbnail: "/pharm-app/images/vod/live-thumnail3.png",
      link: "",
    },
  ]
  return (
    <MainSection>
      <SecTitle>Live 세미나</SecTitle>
      <GridCol3>
        {liveList.map((vod) => (
          <VodCard key={vod.id} type="recomm">
            <Link to={vod.link}>
              <div>
                <img src={vod.thumbnail} alt="vod 썸네일" />
              </div>
              <div className="info">
                <strong>{vod.title}</strong>
                <div className="org">{vod.org}</div>
                <div className="time">{vod.time}</div>
                <div className="label">
                  {vod.labels.map((label, idx) => (
                    <span key={idx}>{label}</span>
                  ))}
                </div>
              </div>
            </Link>
          </VodCard>
        ))}
        
      </GridCol3>
    </MainSection>
  )
}

export default Live