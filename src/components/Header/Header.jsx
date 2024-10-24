import DotsGrid from "../_SmallComponents/DotsGrid"
import "./Header.scss"
import { Route, Routes, useLocation, Outlet, Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<>About Us</>} />
          <Route path="/services" element={<>Services</>} />
          <Route path="/blog" element={<>Blog</>} />
          <Route path="/contact" element={<>Contact us</>} />
          <Route path="/shop" element={<>Shop</>} />
          <Route path="/cart" element={<>Cart</>} />
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </header>
  )
}

function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="container">
      {pathname.startsWith("/shop") || pathname.startsWith("/cart") ? (
        <>
          <div className="left">
            <h1>
              {pathname === "/" ? "Modern Interior Design Studio" : <Outlet />}
            </h1>
          </div>
          <div className="right"></div>
        </>
      ) : (
        <>
          <div className="left">
            <h1>
              {pathname === "/" ? "Modern Interior Design Studio" : <Outlet />}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae esse, autem dolores reprehenderit et voluptate
              dignissimos.
            </p>
            <Link className="shop-link" to="/shop">
              Shop Now
            </Link>
            <Link className="explore-link" to="/explore">
              Explore
            </Link>
          </div>
          <div className="right">
              <img
                src="https://themewagon.github.io/furni/images/couch.png"
                alt="coutch"
              />
            <DotsGrid bgColor="#aaaaaa88" />
          </div>
        </>
      )}
    </div>
  )
}
