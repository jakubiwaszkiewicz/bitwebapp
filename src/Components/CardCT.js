import "./styles/contentcardCT.css"

export default function cardCT (props) {
    return (
    <article className="cardCT">
        <span className="title-cardCT title-work">{props.item.title}</span>
        <img src={props.item.img} alt={props.item.alt}/>
        <span className="title-cardCT title-name">{props.item.name}</span>
    </article>
    )
}