import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <div className="host-layout">
      <nav className="host-nav">
        <NavLink className="Dashboard-link" style={({isActive}) => isActive ? activeStyle : null} end to="/host">Dashboard</NavLink>
        <NavLink className="income-link" style={({isActive}) => isActive ? activeStyle : null} to="/host/income">Income</NavLink>
        <NavLink className="vans-link" style={({isActive}) => isActive ? activeStyle : null} to="/host/vans">Vans</NavLink>
        <NavLink className="reviews-link" style={({isActive}) => isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}