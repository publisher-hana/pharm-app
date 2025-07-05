import { HeartIco } from './layout.style'
interface Props {
  className?: string;
  onClick?: () => void;
}
function FavIco({className,onClick} : Props) {
  return (
    <HeartIco className={className} onClick={onClick}></HeartIco>
  )
}

export default FavIco