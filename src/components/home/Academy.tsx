import { SecTitle } from '@/styles/common.styled'
import Slider from "react-slick";
import { AcademyMain,AcademyCard } from './home.styled';

const Academy = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <SecTitle>Academy</SecTitle>
      <AcademyMain>
        <Slider {...settings}>
          <AcademyCard>
            <div className='top'>
              <span className='label-class'><img src='/pharm-app/images/label-class.png' alt="class" /></span>
            </div>
            <div className='thumnail'>
              <img src='/pharm-app/images/academy-profile.png' alt="강사 이미지" />
            </div>
            <div className="info">
              <div className="date">2023.02.02 ~ 2023.05.01</div>
              <div className="title">수의 기본임상시험 클래스</div>
              <div className="lecture-count">강의 26</div>
            </div>
          </AcademyCard>
          <AcademyCard bgColor="lightgreen">
              <div className='top'>
                <span className='label-package'><img src='/pharm-app/images/label-package.png' alt="package class" /></span>
              </div>
          </AcademyCard>
          <AcademyCard>

          </AcademyCard>  
        </Slider>
      </AcademyMain>
    </>
  )
}

export default Academy