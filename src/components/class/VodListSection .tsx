import { useState } from "react";
import { GridCol3, VodCard } from "../home/home.style";
import { Link } from "react-router-dom";
import { BtnMore } from "../form/form.style";


type VodListSectionProps = {
   list: VodItem[];
  initialVisible?: number;
  showMoreButton?: boolean; 
};

interface VodItem {
  id: number;
  labels: string[];
  title: string;
  org: string;
  time: string;
  thumbnail: string;
  link: string;
}

const VodListSection = ({ list, initialVisible = 6, showMoreButton = true }: VodListSectionProps) => {
    const [visibleItems, setVisibleItems] = useState(initialVisible);
  const visibleVodList = list.slice(0, visibleItems);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 4);
  };
  

  return (
    <>
      <GridCol3>
        {visibleVodList.map((vod) => (
          <VodCard key={vod.id} type="recomm">
            <Link to={vod.link}>
              <div>
                <img src={vod.thumbnail} alt="vod 썸네일" />
              </div>
              <div className="info">
                <strong>{vod.title}</strong>
                <div className="org">{vod.org}</div>
                <div className="time">{vod.time}</div>
                <div className="label">
                  {vod.labels?.map((label, idx)  => (
                    <span key={idx}>{label}</span>
                  ))}
                </div>
              </div>
            </Link>
          </VodCard>
        ))}
      </GridCol3>
      {showMoreButton && visibleItems < list.length && (
        <BtnMore onClick={handleShowMore}>더보기</BtnMore>
      )}
    </>
  );
};

export default VodListSection