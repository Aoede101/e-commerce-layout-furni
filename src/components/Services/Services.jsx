import "./Services.scss"
import {
  faBagShopping,
  faHeadset,
  faRetweet,
  faTruck,
} from "@fortawesome/free-solid-svg-icons"
import CraftingSec from "../_SmallComponents/CraftingSec"
import TestimonialSlider from "../_SmallComponents/TestimonialSlider"
import ServiceCard from "../_SmallComponents/ServiceCard"

export default function Services() {
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
  const servicesElements = benifits.concat(benifits).map((ben, i) => {
    return <ServiceCard card={ben} i={i} key={i} />
  })
  return (
    <>
      <section id="services">
        <div className="container">{servicesElements}</div>
      </section>
      <CraftingSec />
      <TestimonialSlider />
    </>
  )
}
