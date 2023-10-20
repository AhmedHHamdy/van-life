import { useEffect, useState } from "react"
import "../../App.css"
import { Link, useParams } from "react-router-dom"
import { Outlet, NavLink } from "react-router-dom"
import { getVan } from "../../api"

export default function HostVanDetail() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { id } = useParams()

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  const [vanDetail, setVanDetail] = useState(null)

  function setVanTypeColor(type) {
    let typeColor = ''
    switch (type) {
      case 'simple':
        typeColor = 'simple'
        return typeColor
      case 'rugged':
        typeColor = 'rugged'
        return typeColor
      case 'luxury':
        typeColor = 'luxury'
        return typeColor
    }
  }

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVan(id)
        setVanDetail(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadVans()
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <section className="vanDetail-container">
      <Link to=".." relative="path" className="back-button">&larr; <span>Back to all vans</span></Link>
      {vanDetail &&
        <section>
          <div className="vanDetail-info-container">
            <img src={vanDetail.imageUrl} alt={`${vanDetail.name} pic`} />
            <div className="vanDetail-info">
              <span className={setVanTypeColor(vanDetail.type) + ' ' + 'vanDetail-type'}>{vanDetail.type}</span>
              <h2>{vanDetail.name}</h2>
              <span className="vanDetail-price">${vanDetail.price}<span>/day</span></span>
            </div>
          </div>


    
          <div className="subPage-container">
            <nav>
              <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null}>Details</NavLink>
              <NavLink to="pricing" style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
              <NavLink to="photos" style={({isActive}) => isActive ? activeStyles : null}>Photos</NavLink>
            </nav>

            <Outlet context={[vanDetail]} />
          </div>
      </section>}
    </section>
  )
}