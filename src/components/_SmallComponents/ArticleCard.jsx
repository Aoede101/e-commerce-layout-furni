import { Link } from "react-router-dom"
import "./SmallComponents.scss"

export default function ArticleCard({ card }) {
  return (
    <div className="article-card">
      <figure>
        <img src={card.article.image} alt="item" />
      </figure>
      <article>
        <h3>
          <Link to={card.article.url}>{card.article.name}</Link>
        </h3>
        <p>
          <span> by </span>
          <Link to={card.author.url}>{card.author.name}</Link>
          <span> on </span>
          {card.article.date}
        </p>
      </article>
    </div>
  )
}
