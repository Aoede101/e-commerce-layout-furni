import "./SmallComponents.scss"
import DotsGrid from "../_SmallComponents/DotsGrid"
import {
  faBagShopping,
  faHeadset,
  faRetweet,
  faTruck,
} from "@fortawesome/free-solid-svg-icons"
import ServiceCard from "./ServiceCard"

export default function WhyChooseUs() {
  const benifits = [
    {
      icon: faTruck,
      tittle: "Fast & Free Shipping",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: faBagShopping,
      tittle: "Easy to Shop",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: faHeadset,
      tittle: "24/7 Support",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: faRetweet,
      tittle: "Hassle Free Returns",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
  ]
  const benifitsElement = benifits.map((ben, i) => {
    return <ServiceCard card={ben} key={i} i={i} />
  })
  return (
    <section id="why-us">
      <div className="container">
        <div className="left">
          <h2>Why Choose Us</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="benifs">{benifitsElement}</div>
        </div>
        <div className="right">
          <figure>
            <img
              src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
              alt="image"
            />
          </figure>
          <DotsGrid bgColor="#f9bf29" />
        </div>
      </div>
    </section>
  )
}
