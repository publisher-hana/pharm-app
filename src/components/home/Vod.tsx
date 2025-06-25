import React from 'react'
import { BtnAll, MainSection } from './home.style'
import { SecTitle } from '@/styles/common.style'
import Slider from 'react-slick'

const Vod = () => {
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
        <SecTitle>임상강좌 VOD</SecTitle>
        <BtnAll>전체보기</BtnAll>
        <Slider {...settings}>
          <div></div>
        </Slider>
      </MainSection>
    </>

  )
}

export default Vod