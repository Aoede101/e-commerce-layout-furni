import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import "./Contact.scss"

export default function Contact() {
  return (
    <section id="contact-us">
      <div className="container">
        <div className="top">
          <a href="https://maps.google.com/">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
          </a>
          <a href="mailto:info@yourdomain.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@yourdomain.com</p>
          </a>
          <a href="tel:+2010000000">
            <FontAwesomeIcon icon={faPhone} />
            <p>+2010000000</p>
          </a>
        </div>
        <form className="bottom">
          <div className="sec">
            <label htmlFor="form-fname">First Name</label>
            <input type="text" name="fname" id="form-fname" />
          </div>
          <div className="sec">
            <label htmlFor="form-lname">Last Name</label>
            <input type="text" name="lname" id="form-lname" />
          </div>
          <div className="sec x-full">
            <label htmlFor="form-email">Email Address</label>
            <input type="text" name="email" id="form-email" />
          </div>
          <div className="sec x-full">
            <label htmlFor="form-msg">Message</label>
            <textarea type="text" name="msg" id="form-msg" />
          </div>
          <div className="sec x-full">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
