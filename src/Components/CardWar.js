import "./styles/contentcard.css"

export default function CardWar (props) {
  return (
    <div className="content-card">
        <div>
          <p>{props.item.description} Kliknij <a href={props.item.link}>tutaj</a> aby zapisać się do warsztatu!</p>
          <img src={props.item.img} alt={props.item.alt}/>
        </div>
    </div>
  )
}
