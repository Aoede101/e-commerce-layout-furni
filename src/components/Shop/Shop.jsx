import "./Shop.scss"
import ItemCard from "../_SmallComponents/ItemCard"
import { useState } from "react"

export default function Shop() {
/*   const [cart, setCart] = useState(null)
 */  const items = [
    {
      id: 0,
      name: "Nordic Chair",
      price: 50,
      image: "https://themewagon.github.io/furni/images/product-1.png",
    },
    {
      id: 1,
      name: "Kruzo Aero Chair",
      price: 78,
      image: "https://themewagon.github.io/furni/images/product-2.png",
    },
    {
      id: 2,
      name: "Economic Chair",
      price: 43,
      image: "https://themewagon.github.io/furni/images/product-3.png",
    },
    {
      id: 0,
      name: "Nordic Chair",
      price: 50,
      image: "https://themewagon.github.io/furni/images/product-1.png",
    },
    {
      id: 1,
      name: "Kruzo Aero Chair",
      price: 78,
      image: "https://themewagon.github.io/furni/images/product-2.png",
    },
    {
      id: 2,
      name: "Economic Chair",
      price: 43,
      image: "https://themewagon.github.io/furni/images/product-3.png",
    },
    {
      id: 0,
      name: "Nordic Chair",
      price: 50,
      image: "https://themewagon.github.io/furni/images/product-1.png",
    },
    {
      id: 1,
      name: "Kruzo Aero Chair",
      price: 78,
      image: "https://themewagon.github.io/furni/images/product-2.png",
    },
    {
      id: 2,
      name: "Economic Chair",
      price: 43,
      image: "https://themewagon.github.io/furni/images/product-3.png",
    },
  ]
  const itemsElemenet = items.map((item, i) => {
    return <ItemCard item={item} key={i} />
  })
  return (
    <section id="shop">
      <div className="container">{itemsElemenet}</div>
    </section>
  )
}
