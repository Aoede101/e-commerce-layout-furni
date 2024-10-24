import "./SmallComponents.scss"

export default function DotsGrid(stats) {
  const dotsgrid = new Array(9 * 9)
    .fill(null)
    .map((v, i) => (
      <div
        key={i}
        style={{ backgroundColor: stats.bgColor }}
        className="dot"
      ></div>
    ))
  return <div className="dots-grid">{dotsgrid}</div>
}
