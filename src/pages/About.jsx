
import { Link } from "react-router-dom"
import about_page from "../assets/about_page.png"
import "../App.css"

export default function About() {
  return (
    <section className="about-container">
      <div className="background-container"></div>
      <div className="about-info">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) <br /> <br />Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

        <div className="vans-shoutout-container">
          <h3>Your destination is waiting. <br /> Your van is ready.</h3>
          <Link to="/van">Explore our vans</Link>
        </div>
      </div>

    </section>
  )
}