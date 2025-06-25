import { Aside } from '@/common/Aside';
import Academy from '@/components/home/Academy';
import { KewordPick } from '@/components/home/KewordPick';
import Live from '@/components/home/Live';
import RecommVod from '@/components/home/RecommVod';
import Vod from '@/components/home/Vod';
import { Container, LeftContent } from '@/styles/common.style';

export const Main = () => {
  return (
    <Container>
      <LeftContent>
          <KewordPick />
          <Academy />
          <Vod />
          <RecommVod />
          <Live />
      </LeftContent>
      <Aside />

    </Container>
  )
}
