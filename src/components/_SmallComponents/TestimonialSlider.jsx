import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import "./SmallComponents.scss"
import { useEffect, useRef, useState } from "react"

export default function TestimonialSlider() {
  const [curr, setCurr] = useState(0)
  const [containerTranslateVal, setContainerTranslateVal] = useState(0)
  const [hasClicked, setHasClicked] = useState(false)

  const containerRef = useRef(null)

  function addCurr() {
    setCurr((prev) => (prev === 3 ? 0 : prev + 1))
  }

  function subCurr() {
    setCurr((prev) => (prev === 0 ? 3 : prev - 1))
  }

  const reviews = [
    {
      name: "Maria Jones",
      title: "CEO, Co-Founder, XYZ Inc.",
      pfp: "https://themewagon.github.io/furni/images/person-1.png",
      text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
    },
    {
      name: "Maria Jones",
      title: "CEO, Co-Founder, XYZ Inc.",
      pfp: "https://themewagon.github.io/furni/images/person-1.png",
      text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
    },
    {
      name: "Maria Jones",
      title: "CEO, Co-Founder, XYZ Inc.",
      pfp: "https://themewagon.github.io/furni/images/person-1.png",
      text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
    },
    {
      name: "Maria Jones",
      title: "CEO, Co-Founder, XYZ Inc.",
      pfp: "https://themewagon.github.io/furni/images/person-1.png",
      text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
    },
  ]
  const reviewsElements = reviews.map((rev, i) => {
    return (
      <div className="review" key={i}>
        <h1>{i}</h1>
        <p>{rev.text}</p>
        <figure>
          <img src={rev.pfp} alt={`person ${i}`} />
        </figure>
        <h3 className="name">{rev.name}</h3>
        <h3 className="title">{rev.title}</h3>
      </div>
    )
  })

  function resetContainer() {
    setContainerTranslateVal(
      -curr * (containerRef.current ? containerRef.current.offsetWidth : 1)
    )
  }

  useEffect(() => {
    function handleResize() {
      resetContainer()
    }
    resetContainer()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [curr])

  /* make the slider slide through time */
  /* run addCurr once each 5s if hasClicked is false*/

  return (
    <section id="testimonial">
      <div ref={containerRef} onResize={resetContainer} className="container">
        <h2>Testimonials</h2>
        <div
          className="slider"
          style={{
            translate: containerTranslateVal,
          }}
        >
          {reviewsElements}
        </div>
        <button onClick={subCurr} className="left">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={addCurr} className="right">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  )
}
