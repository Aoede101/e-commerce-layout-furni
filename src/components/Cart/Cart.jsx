import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons"
import "./Cart.scss"
import { useEffect, useState } from "react"

export default function Cart() {
  const [cart, setCart] = useState(null)

  function incrementAmount(itemID) {
    setCart((prev) => {
      return prev.map((item) => {
        return item.prod.id === itemID
          ? { ...item, amount: item.amount + 1 }
          : item
      })
    })
  }
  function decrementAmount(itemID) {
    setCart((prev) => {
      return prev.map((item) => {
        return item.prod.id === itemID
          ? { ...item, amount: item.amount - 1 }
          : item
      })
    })
  }
  function deleteItem(itemID) {
    setCart((prev) => {
      return prev.filter((item) => {
        return item.prod.id !== itemID
      })
    })
  }

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"))
    const orders = JSON.parse(localStorage.getItem("cart"))
    setCart(
      orders.map((order) => {
        return {
          amount: order.amount,
          prod: products.find((prodsProd) => prodsProd.id === order.id),
        }
      })
    )
  }, [])

  useEffect(() => {
    /* update the cart array in local storage */
    cart &&
      cart.length > 0 &&
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.map((item) => {
            return { id: item.prod.id, amount: item.amount }
          })
        )
      )
  }, [cart])

  const cartElements =
    cart && cart.length > 0 ? (
      cart.map((item, i) => {
        return (
          <div className="table-row" key={i}>
            <figure>
              <img src={item.prod.image} alt={`item ${item.id}`} />
            </figure>
            <p className="name">{item.prod.name}</p>
            <div className="price-div">
              <p className="show-s price-text">Price </p>
              <p className="price">${item.prod.price.toFixed(2)}</p>
            </div>
            <div className="amount">
              <button onClick={() => decrementAmount(item.prod.id)}>-</button>
              <input
                type="number"
                max="999"
                pattern="\d{1,3}"
                value={item.amount}
                onChange={(e) => {
                  setCart((prev) =>
                    prev.map((it) => {
                      return it.prod.id === item.prod.id
                        ? { ...it, amount: Number(e.target.value) }
                        : it
                    })
                  )
                }}
                onFocus={(e) => {
                  e.target.select()
                }}
              />
              <button onClick={() => incrementAmount(item.prod.id)}>+</button>
            </div>
            <p className="total">
              ${(item.prod.price * item.amount).toFixed(2)}
            </p>
            <button
              className="delete-btn"
              onClick={() => {
                deleteItem(item.prod.id)
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        )
      })
    ) : (
      <div>no placed orders</div>
    )

  return (
    <>
      <section id="cart">
        <div className="container">
          <div className="products-table">
            <div className="table-header">
              <p>Image</p>
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <p className="show-s title-s">Your Cart</p>
            <>{cartElements}</>
          </div>
          <div className="check-out">
            <h2>Cart Totals</h2>
            <div className="subtotal">
              <h3>Subtotal</h3>
              <p>
                $
                {cart
                  ? cart
                      .reduce((accumulator, item) => {
                        return accumulator + item.prod.price * item.amount
                      }, 0)
                      .toFixed(2)
                  : "0.00"}
              </p>
            </div>
            <div className="total">
              <h3>Total</h3>
              <p>
                $
                {cart
                  ? cart
                      .reduce((accumulator, item) => {
                        return accumulator + item.prod.price * item.amount
                      }, 0)
                      .toFixed(2)
                  : "0.00"}
              </p>
            </div>
            <div>
              <button>Proceed To Checkouts</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
