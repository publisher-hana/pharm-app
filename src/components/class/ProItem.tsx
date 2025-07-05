import { useState } from "react";
import { BtnToggle, ListInfo, ProfileStyle } from "@/pages/class/class.style";

function ProItem() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={isOpen ? "open" : ""}>
      <ProfileStyle>
        <figure>
          <img src="/pharm-app/images/doctor_sample1.png"alt='' />
        </figure>
        <ListInfo>
          <strong>최원석 교수</strong>
          <span className='belong'>서울대학교 소화기질환연구소</span>
          <ul className="info-list">
            <li><em>진료과</em> <span className="val blue">소화기 내과</span></li>
            <li><em>진료분야</em> <span className="val blue">협심증,심근경색,급성심정지,관상동맥질환,협심증,심근경색,금성심정지</span>
            <ul><li>- 現 분당서울대학교병원 내과 교수</li><li>- 現 Editorial board: Diabetes, Obesity and Metabolism</li><li>- Massachusetts General Hospital/Harvard Medical School</li></ul></li>
          </ul>
        </ListInfo>
      </ProfileStyle>
      <BtnToggle onClick={handleToggle}  className={isOpen ? "open" : ""}>더보기</BtnToggle>
    </li>
  )
}

export default ProItem