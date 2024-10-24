import { Link } from "react-router-dom"
import "./SmallComponents.scss"

export default function OurTeam() {
  const members = [
    {
      name: "Lawson Arnold",
      position: "CEO, Founder, Atty.",
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      email: "lawson@atty.com",
      image: "https://themewagon.github.io/furni/images/person_1.jpg",
      profileLink: "/#",
    },
    {
      name: "Jack Blake",
      position: "CTO, Co-Founder, Tech Solutions Ltd.",
      text: "Far from the countries Vokalia and Consonantia, there live the blind texts. Separated, they roam freely in the vast expanse of the digital world.",
      email: "jackb@techsolutions.com",
      image: "https://themewagon.github.io/furni/images/person_2.jpg",
      profileLink: "/#",
    },
    {
      name: "Henry Wallace",
      position: "CFO, Founder, Financial Insights",
      text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic land, in which financial harmony reigns.",
      email: "henry@financialinsights.com",
      image: "https://themewagon.github.io/furni/images/person_3.jpg",
      profileLink: "/#",
    },
    {
      name: "Sarah Thompson",
      position: "COO, Co-Founder, Innovate Inc.",
      text: "In the midst of the silent universe, they thrive. Words and ideas bring them closer, connected across the oceans of thought and creativity.",
      email: "sarah@innovateinc.com",
      image: "https://themewagon.github.io/furni/images/person_4.jpg",
      profileLink: "/#",
    },
  ]

  const membersElement = members.map((member, i) => {
    return (
      <div className="card">
        <figure>
          <img src={member.image} alt="person" />
        </figure>
        <Link to="/#" className="name">
          {member.name}
        </Link>
        <p className="position">{member.position}</p>
        <p className="quote">{member.text}</p>
        <Link className="mail" to={"mailto:" + member.email}>
          Learn More
        </Link>
      </div>
    )
  })
  return (
    <section id="our-team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="cards">{membersElement}</div>
      </div>
    </section>
  )
}
