import "./App.scss"
import NavBar from "./components/NavBar/NavBar"
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react"

const products = [
  {
    name: "Nordic Chair",
    price: 50,
    image: "https://themewagon.github.io/furni/images/product-1.png",
  },
  {
    name: "Kruzo Aero Chair",
    price: 78,
    image: "https://themewagon.github.io/furni/images/product-2.png",
  },
  {
    name: "Economic Chair",
    price: 43,
    image: "https://themewagon.github.io/furni/images/product-3.png",
  },
]

function App() {
  const initializeProducts = () => {
    !localStorage.getItem("products") &&
      localStorage.setItem(
        "products",
        JSON.stringify(
          products.map((prod, i) => {
            return { id: i, ...prod }
          })
        )
      )
  }
  const initializeCart = () => {
    !localStorage.getItem("cart") &&
      localStorage.setItem("cart", JSON.stringify([]))
  }
  useEffect(() => {
    initializeProducts()
    initializeCart()
  }, [])
  return (
    <>
      <NavBar />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
