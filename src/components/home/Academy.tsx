/** @jsxImportSource @emotion/react */
import { HoverType, SecTitle } from '@/styles/common.style'
import Slider from "react-slick";
import { MainSection,AcademyCard,BtnAll } from './home.style';
import { Link } from 'react-router-dom';

const Academy = () => {
   const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <MainSection>
        <SecTitle>Academy</SecTitle>
        <BtnAll>전체보기</BtnAll>
        <Slider {...settings}>
          <div>
            <Link to="/class/classview" css={HoverType.underline}>
              <AcademyCard>
                <div className='top'>
                  <span className='label-class'><img src='/pharm-app/images/vod/label-class.png' alt="class" /></span>
                </div>
                <div className='thumnail'>
                  <img src='/pharm-app/images/vod/academy-profile.png' alt="강사 이미지" />
                </div>
                <div className="info">
                  <div className="date">2023.02.02 ~ 2023.05.01</div>
                  <strong className="title">성균관대학교 C캠퍼스 김지환 교수님의 슬개골 진료분야</strong>
                  <div className="lecture-count">강의 <span>26</span></div>
                </div>  
              </AcademyCard>
            </Link>
          </div>
          <div>
            <Link to="/class/classview" css={HoverType.underline}>
              <AcademyCard bgColor="lightgreen">
                  <div className='top'>
                    <span className='label-package'><img src='/pharm-app/images/vod/label-package.png' alt="package class" /></span>
                  </div>
                  <div className='thumnail'>
                    <img src='/pharm-app/images/vod/academy-profile.png' alt="강사 이미지" />
                  </div>
                  <div className="info">
                    <div className="date">2023.02.02 ~ 2023.05.01</div>
                    <strong className="title">수의 기본임상시험 클래스</strong>
                    <div className="lecture-count">강의 <span>26</span></div>
                  </div>  
              </AcademyCard>
            </Link>
          </div>
          <div>
            <Link to="/class/classview" css={HoverType.underline}>
              <AcademyCard>
                <div className='top'>
                  <span className='label-class'><img src='/pharm-app/images/vod/label-class.png' alt="class" /></span>
                </div>
                <div className='thumnail'>
                  <img src='/pharm-app/images/vod/academy-profile.png' alt="강사 이미지" />
                </div>
                <div className="info">
                  <div className="date">2023.02.02 ~ 2023.05.01</div>
                  <strong className="title">성균관대학교 C캠퍼스 김지환 교수님의 슬개골 진료분야</strong>
                  <div className="lecture-count">강의 <span>26</span></div>
                </div>  
              </AcademyCard>
            </Link>
          </div>
          <div>
            <Link to="/class/classview" css={HoverType.underline}>
              <AcademyCard>
                <div className='top'>
                  <span className='label-class'><img src='/pharm-app/images/vod/label-class.png' alt="class" /></span>
                </div>
                <div className='thumnail'>
                  <img src='/pharm-app/images/vod/academy-profile.png' alt="강사 이미지" />
                </div>
                <div className="info">
                  <div className="date">2023.02.02 ~ 2023.05.01</div>
                  <strong className="title">성균관대학교 C캠퍼스 김지환 교수님의 슬개골 진료분야</strong>
                  <div className="lecture-count">강의 <span>26</span></div>
                </div>  
              </AcademyCard>
            </Link>
          </div>
          <div>
            <Link to="/class/classview" css={HoverType.underline}>
              <AcademyCard>
                <div className='top'>
                  <span className='label-class'><img src='/pharm-app/images/vod/label-class.png' alt="class" /></span>
                </div>
                <div className='thumnail'>
                  <img src='/pharm-app/images/vod/academy-profile.png' alt="강사 이미지" />
                </div>
                <div className="info">
                  <div className="date">2023.02.02 ~ 2023.05.01</div>
                  <strong className="title">성균관대학교 C캠퍼스 김지환 교수님의 슬개골 진료분야</strong>
                  <div className="lecture-count">강의 <span>26</span></div>
                </div>  
              </AcademyCard>
            </Link>
          </div>
        </Slider>
      </MainSection>
    </>
  )
}

export default Academy