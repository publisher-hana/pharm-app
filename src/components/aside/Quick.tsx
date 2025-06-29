import { Link } from 'react-router-dom'
import { QuickStyle, AsideTtitle } from './aside.style'
import { IcoArr } from '@/styles/common.style'

const Quick = () => {
  return (
    <QuickStyle>
       <AsideTtitle>Quick Menu</AsideTtitle>
       <div className='quick-row'>
        <Link to="/" className='ques'>
          <strong>1:1문의</strong><span>자주 묻는 질문과 1:1 문의</span>
          <IcoArr className='ico-arr' />
        </Link>
       </div>
       <div className='quick-row'>
        <Link to="/" className='propose'>
          <strong>제안하기</strong><span>팜빌에 제안하기</span>
           <IcoArr className='ico-arr' />
        </Link>
       </div>
       <div className='quick-row'>
        <Link to="/" className='notice'>
          <strong>공지사항</strong><span>꼭 알아둬야할 소식</span>
          <IcoArr className='ico-arr' />
        </Link>
       </div>
    </QuickStyle>
  )
}

export default Quick