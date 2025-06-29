import { Aside } from '@/common/Aside';
import VodListSection from '@/components/class/VodListSection ';
import Academy from '@/components/home/Academy';
import { MainSection } from '@/components/home/home.style';
import { KewordPick } from '@/components/home/KewordPick';
import Live from '@/components/home/Live';
import Vod from '@/components/home/Vod';
import vodList from '@/data/vodList';
import { Container, LeftContent, SecTitle } from '@/styles/common.style';
export const Main = () => {
  return (
    <Container className='pd-t100'>
      <LeftContent>
          <KewordPick />
          <Academy />
          <Vod />
          <MainSection>
            <SecTitle>추천 콘텐츠</SecTitle>
             <VodListSection list={vodList} initialVisible={6} showMoreButton={false} />
          </MainSection>
          <Live />
      </LeftContent>
      <Aside />

    </Container>
  )
}
