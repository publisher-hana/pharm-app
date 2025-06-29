import { IoIosSearch } from 'react-icons/io'
import { SchInputStyle } from './form.style'
import { BtnSch } from '@/common/comLayout.style'

const SchInput = () => {
  return (
    <>
      <SchInputStyle className="sch_box">
        <input type="text" placeholder="검색어 입력하세요"></input>
        <BtnSch className='btn-sch'><IoIosSearch /></BtnSch>
      </SchInputStyle>
    </>
  )
}

export default SchInput