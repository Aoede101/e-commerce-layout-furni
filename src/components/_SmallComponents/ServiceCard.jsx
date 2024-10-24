import "./SmallComponents.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ServiceCard(stats) {
  return (
    <div className="service-card" key={stats.card.i}>
      <div className="icon">
        <FontAwesomeIcon icon={stats.card.icon} />
      </div>
      <h3>{stats.card.tittle}</h3>
      <p>{stats.card.desc}</p>
    </div>
  )
}
