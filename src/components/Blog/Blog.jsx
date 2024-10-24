import ArticleCard from "../_SmallComponents/ArticleCard"
import TestimonialSlider from "../_SmallComponents/TestimonialSlider"
import "./Blog.scss"

export default function Blog() {
  const cards = [
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-1.jpg",
        url: "/#",
        name: "Top Trends in Modern Furniture Design",
        date: "September 20, 2024",
      },
      author: {
        name: "Jane Doe",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-2.jpg",
        url: "/#",
        name: "Choosing the Right Sofa for Your Living Room",
        date: "September 18, 2024",
      },
      author: {
        name: "John Smith",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-3.jpg",
        url: "/#",
        name: "How to Maintain Wooden Furniture",
        date: "September 15, 2024",
      },
      author: {
        name: "Emily Johnson",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-1.jpg",
        url: "/#",
        name: "Rustic Furniture Ideas for Your Home",
        date: "September 12, 2024",
      },
      author: {
        name: "Michael Lee",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-2.jpg",
        url: "/#",
        name: "Luxury Living Room Furniture Designs",
        date: "September 10, 2024",
      },
      author: {
        name: "Sophia Wilson",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-3.jpg",
        url: "/#",
        name: "Sustainable Materials for Eco-Friendly Furniture",
        date: "September 8, 2024",
      },
      author: {
        name: "Liam Brown",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-1.jpg",
        url: "/#",
        name: "Rustic Dining Tables: A Timeless Choice",
        date: "September 6, 2024",
      },
      author: {
        name: "Alice Green",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-2.jpg",
        url: "/#",
        name: "Luxury Bedroom Furniture Ideas",
        date: "September 4, 2024",
      },
      author: {
        name: "Oliver Davis",
        url: "/#",
      },
    },
    {
      article: {
        image: "https://themewagon.github.io/furni/images/post-3.jpg",
        url: "/#",
        name: "Maximizing Small Spaces with Compact Furniture",
        date: "September 2, 2024",
      },
      author: {
        name: "Emma White",
        url: "/#",
      },
    },
  ]

  const cardElments = cards.map((card, i) => {
    return <ArticleCard card={card} key={i} />
  })

  return (
    <>
      <section id="blog-articles">
        <div className="container">{cardElments}</div>
      </section>
      <TestimonialSlider />
    </>
  )
}
