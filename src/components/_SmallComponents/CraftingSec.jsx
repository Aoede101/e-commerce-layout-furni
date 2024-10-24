import "./SmallComponents.scss"
import { Link } from "react-router-dom"
import ItemCard from "./ItemCard"
import { useEffect, useState } from "react"

export default function CraftingSec() {
  const [products, setProducts] = useState([])
  const productsElements =
    products && products.length > 0 ? (
      products.map((prod, i) => {
        return <ItemCard item={prod} key={i} />
      })
    ) : (
      <></>
    )

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")))
  }, [])
  return (
    <section id="crafted">
      <div className="container">
        <article>
          <h2>Crafted with excellent material.</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
          </p>
          <Link to="/shop">Explore</Link>
        </article>
        {productsElements}
      </div>
    </section>
  )
}
