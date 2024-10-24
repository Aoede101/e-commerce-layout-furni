import "./NavBar.scss"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"

export default function NavBar() {
  const { pathname } = useLocation()
  const expandableElement = useRef()
  function toggleExplandable() {
    expandableElement.current.classList.toggle("active")
  }
  return (
    <nav id="navbar">
      <div className="container">
        <div className="main-nav">
          <Link className="navbar-brand" to="/">
            Furni
            <span>.</span>
          </Link>
          <ul className="middle">
            <li>
              <Link to="/" className={pathname == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className={pathname == "/shop" ? "active" : ""}>
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={pathname == "/about" ? "active" : ""}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={pathname == "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className={pathname == "/blog" ? "active" : ""}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={pathname == "/contact" ? "active" : ""}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link to=".">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
          </ul>
          <button className="expand" onClick={toggleExplandable}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="expandable-nav" ref={expandableElement}>
          <ul className="top">
            <li>
              <Link to="/" className={pathname == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className={pathname == "/shop" ? "active" : ""}>
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={pathname == "/about" ? "active" : ""}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={pathname == "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className={pathname == "/blog" ? "active" : ""}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={pathname == "/contact" ? "active" : ""}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="bottom">
            <li>
              <Link to=".">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
