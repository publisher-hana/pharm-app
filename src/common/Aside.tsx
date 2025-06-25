import { useLocation } from 'react-router-dom';
import { AsideStyle } from './comLayout.style'
import TheShopBox from '@/components/aside/TheShopBox';

export const Aside = () => {
  const location = useLocation(); 
  const renderAsideContent = () => {
    switch (location.pathname) {
      case '/':
        return ( 
        <>
         <section>
          <TheShopBox />
         </section>
        </>
      )
       default:
        return null; // 다른 경로에서는 Aside를 비우거나 다른 컴포넌트 렌더링
    }
  };

  return <AsideStyle>{renderAsideContent()}</AsideStyle>;
}

export default Aside