import { IcoArr } from "@/styles/common.style"
import { AsideTtitle, BtnAll, TitleAreaStyle } from "./aside.style"

export interface props{
  title ?: string;
  btntext ?: string;
}
const AsideTitleArea = ({title,btntext} : props) => {
  return (
    <TitleAreaStyle>
      <AsideTtitle>{title}</AsideTtitle>
      {btntext && <BtnAll>{btntext}<IcoArr /></BtnAll>}
    </TitleAreaStyle>
  )
}

export default AsideTitleArea