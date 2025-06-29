import Aside from "@/common/Aside"
import { Container, LeftContent, TopCont } from "@/styles/common.style"
import { SchGrp } from "./class.style"
import SelectBox from "@/components/form/SelectBox";
import SchDataInput from "@/components/form/SchDataInput";
import SchInput from "@/components/form/SchInput";
import VodListSection from "@/components/class/VodListSection ";
import vodList from "@/data/vodList";

const LiveReplay = () => {
  const selectList1 = [
    { label: "전체", value: "all" },
    { label: "질환군", value: "disease" },
    { label: "피부", value: "skin" },
    { label: "호흡기질환", value: "respiratory" },
  ];
  return (
    <>
      <TopCont>
          <h2 className="live-replay menu-title">라이브 다시보기 <span className="icon"><img src='/pharm-app/images/title/icon_replay.png' alt="리플레이" /></span></h2>
          <p className="desc">놓친 라이브 세미나, 팜빌에서 언제든지 다시 보세요.</p>
      </TopCont>
      <Container>
        <LeftContent>
          <SchGrp>
            <div className="col"><SchDataInput /></div>
            <div className="col select"><SelectBox selectList={selectList1} /></div>
            <div className="col flex-1"><SchInput /></div>
          </SchGrp>
           <VodListSection list={vodList} initialVisible={9} />
        </LeftContent>
        <Aside />
      </Container>
    </>
  )
}

export default LiveReplay