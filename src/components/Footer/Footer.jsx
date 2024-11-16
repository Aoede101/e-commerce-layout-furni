import "./Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="left">
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span>Subscribe to Newsletter</span>
            </p>
            <form>
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your email" />
              <button type="sumbit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
          <figure className="right">
            <img
              src="https://themewagon.github.io/furni/images/sofa.png"
              alt="car"
            />
          </figure>
        </div>
        <Link className="brand" to="/#">
          Furni
          <span>.</span>
        </Link>
        <div className="hyper-links">
          <div className="media">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque`
              habitant
            </p>
            <div className="media-links">
              <Link to="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="https://www.x.com">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link to="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
          <div className="page-links-lists">
            <ul>
              <li>
                <Link to="/about">About us </Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/#">Support</Link>
              </li>
              <li>
                <Link to="/#">Knowledge base</Link>
              </li>
              <li>
                <Link to="/#">Live chat</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/#">Jobs</Link>
              </li>
              <li>
                <Link to="/#">Our team</Link>
              </li>
              <li>
                <Link to="/#">Leadership</Link>
              </li>
              <li>
                <Link to="/#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="credits">
          <div className="left">
            <p>
              Copyright &copy;2024. All Rights Reserved. — Designed with love by
              <Link to="/#"> Untree.co </Link>
              Distributed By ThemeWagon
            </p>
          </div>
          <div className="right">
            <Link to="/#">Terms &amp; Conditions</Link>
            <Link to="/#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
