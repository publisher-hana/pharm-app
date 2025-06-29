
export interface BannerProps{
  img ?: string;
}
const BannerItem = ({img} : BannerProps) => {
  return (
    <section className="banner">
      <a href='#'>
        <img src={img} alt=""></img>
      </a>
    </section>
  )
}

export default BannerItem