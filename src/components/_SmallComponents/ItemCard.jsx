import { useEffect, useState } from "react"
import "./SmallComponents.scss"

export default function ItemCard(props) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  )

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(_id) {
    // check if the item exists in cart
    //    if yes increament the amount
    //    if not create a new object containing amount = 0 and the id
    const itemFound = cart.some((cartItem) => cartItem.id === _id)

    const newCart = cart.map((cartItem) => {
      if (cartItem.id === _id) {
        return { id: _id, amount: cartItem.amount + 1 }
      }
      return cartItem
    })

    if (!itemFound) {
      newCart.push({ id: _id, amount: 1 })
    }

    setCart(newCart)
  }
  return (
    <div className="item-card">
      <div className="sliding-bg"></div>
      <figure>
        <img src={props.item.image} alt={`item ${props.item.i}`} />
      </figure>
      <h3>{props.item.name}</h3>
      <p>{`$${props.item.price.toFixed(2)}`}</p>
      <button
        onClick={() => {
          addToCart(props.item.id)
        }}
      >
        <span>+</span>
      </button>
    </div>
  )
}
