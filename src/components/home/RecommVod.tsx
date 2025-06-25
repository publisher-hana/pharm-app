import React from 'react'
import { MainSection, GridCol3, VodCard } from './home.style'
import { SecTitle } from '@/styles/common.style'
import { Link } from 'react-router-dom'

const RecommVod = () => {
  const vodList = [
  {
    id: 1,
    labels: ["학술", "온라인"],
    title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
    org: "정주현 원장 (일산동물의료원)",
    time: "2023-01-19(수) 20:00 ~ 21:00",
    thumbnail: "/pharm-app/images/vod/vod-thumnail1.png",
    link: "",
  },
  {
    id: 2,
    labels: ["학술", "온라인"],
    title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다.암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
    org: "정주현 원장 (일산동물의료원)",
    time: "2023-01-19(수) 20:00 ~ 21:00",
    thumbnail: "/pharm-app/images/vod/vod-thumnail2.png",
    link: "",
  },
  {
    id: 3,
    labels: ["학술", "온라인"],
    title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
    org: "정주현 원장 (일산동물의료원)",
    time: "2023-01-19(수) 20:00 ~ 21:00",
    thumbnail: "/pharm-app/images/vod/vod-thumnail3.png",
    link: "",
  },
  {
    id: 4,
    labels: ["학술", "온라인"],
    title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
    org: "정주현 원장 (일산동물의료원)",
    time: "2023-01-19(수) 20:00 ~ 21:00",
    thumbnail: "/pharm-app/images/vod/vod-thumnail1.png",
    link: "",
  },
  {
    id: 5,
    labels: ["학술", "온라인"],
    title: "암 유전체학의 역사(발전사) 프로세스에 대해서 알아봅니다",
    org: "정주현 원장 (일산동물의료원)",
    time: "2023-01-19(수) 20:00 ~ 21:00",
    thumbnail: "/pharm-app/images/vod/vod-thumnail2.png",
    link: "",
  },
];
  return (
     <MainSection>
      <SecTitle>추천 콘텐츠</SecTitle>
      <GridCol3>
        {vodList.map((vod) => (
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

export default RecommVod