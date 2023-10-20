// import background_main from '../assets/background_main.png'
import { Link } from "react-router-dom"
// import viteLogo from '/vite.svg'

export default function Home() {
  return (
    <main>
      <section className="main-section">
        <h1>#VANLIFE</h1>
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip. This is the single page application made with React. Here I used React Router and many other React features. Check my github repositories for more projects.</p>
        <Link to="/vans">Find your van</Link>
      </section>
      <div className="overlay"></div>
    </main>
  )
}
