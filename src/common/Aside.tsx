import { useLocation } from 'react-router-dom';
import { AsideStyle } from './comLayout.style'
import TheShopBox from '@/components/aside/TheShopBox';
import Community from '@/components/aside/Community';
import BannerItem from './BannerItem';
import Quick from '@/components/aside/Quick';

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
          <section>
            <Community />
          </section>
          <BannerItem img="/pharm-app/images/banner/banner1.png"/>
          <BannerItem img="/pharm-app/images/banner/banner2.png"/>
          <section>
            <Quick />
          </section>
          <BannerItem img="/pharm-app/images/banner/banner3.jpg"/>
          <BannerItem img="/pharm-app/images/banner/banner4.png"/>
        </>
      )
      case '/class':
        return ( 
        <>
          <BannerItem img="/pharm-app/images/banner/banner1.png"/>
          <BannerItem img="/pharm-app/images/banner/banner2.png"/>
        </>
      )
      case '/class/replay':
        return ( 
        <>
          <BannerItem img="/pharm-app/images/banner/banner1.png"/>
          <BannerItem img="/pharm-app/images/banner/banner2.png"/>
        </>
      )
       case '/news':
        return ( 
        <>
          <BannerItem img="/pharm-app/images/banner/banner1.png"/>
        </>
      )
       default:
        return null; 
    }
  };

  return <AsideStyle>{renderAsideContent()}</AsideStyle>;
}

export default Aside