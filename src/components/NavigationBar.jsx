import { NavLink, Link } from "react-router-dom"
import imageUrl from "../assets/avatar-icon.png"
import { useEffect, useState } from "react"

export default function NavigationBar() {
  const loggedinStatus = localStorage.getItem('loggedin')

  const [status, setStatus] = useState(loggedinStatus)

  useEffect(()=> {
    
  }, [loggedinStatus])

  function logOut() {
    localStorage.removeItem("loggedin")
    setStatus(previousValue => !previousValue)
  }

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <header>
      <nav>
        <Link className="home-link" to="/">#VanLife</Link>
        <NavLink className="host-link" style={({isActive}) => isActive ? activeStyle : null} to="/Host">Host</NavLink>
        <NavLink className="about-link" style={({isActive}) => isActive ? activeStyle : null} to="/about">About</NavLink>
        <NavLink className="van-link" style={({isActive}) => isActive ? activeStyle : null} to="/vans">Vans</NavLink>
        { !status ? <Link to="login" className="login-link">
          <img src={imageUrl} alt="login-icon" />
        </Link> : <Link className="logout-link" to="/" onClick={logOut}>Logout</Link>}
      </nav>
    </header>
  )
}