import Academy from '@/components/home/Academy';
import Vod from '@/components/home/Vod';
import { Aside, Container, LeftContent } from '@/styles/common.style';

export const Main = () => {
  return (
    <Container>
      <LeftContent>
          <Academy />
          <Vod />
      </LeftContent>
      <Aside>

      </Aside>
    </Container>
  )
}
