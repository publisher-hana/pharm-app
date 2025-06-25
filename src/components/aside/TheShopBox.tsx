import { Link } from 'react-router-dom'
import { TheShopBoxStyle } from './aside.style'

const TheShopBox = () => {
  return (
    <Link to="">
      <TheShopBoxStyle>
          <span className='ico'><img src='/pharm-app/images/ico/ico-theshop.png' alt="더샵" /></span>
          <div className='right'>
            <strong>병원경영에 꼭 필요한 더샵</strong>
            <p>병원에 필요한 모든 쇼핑이 한 곳에!</p>
          </div>
      </TheShopBoxStyle>
    </Link>
    
  )
}

export default TheShopBox