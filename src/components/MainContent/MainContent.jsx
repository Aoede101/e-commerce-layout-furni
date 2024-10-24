import { Route, Routes, useLocation, Outlet } from "react-router-dom"
import Home from "../Home/Home"
import Shop from "../Shop/Shop"
import About from "../About/About"
import "./MainContent.scss"
import Services from "../Services/Services"
import Blog from "../Blog/Blog"
import Contact from "../Contact/Contact"
import Cart from "../Cart/Cart"

export default function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </main>
  )
}

function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <Outlet />
    </>
  )
}
