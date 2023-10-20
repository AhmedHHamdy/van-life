import "../../App.css"
import Van from "../../components/Van"
import { useParams, Link, useLocation } from  "react-router-dom"
import { useEffect, useState } from "react"
import { getVan } from "../../api"

export default function VanDetails() {
  const params = useParams()
  const [van, setVan] = useState([])
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
        const data = await getVan(params.id)
        setVan(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadVans()
  }, [params.id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  const search = location.state?.search || ""
  const type = location.state?.type || "all"


  return (
    <div className='van-details-page'>
      <Link to={`..${search}`} relative="path">
        <div className="nav-container">
          <i className="fa-solid fa-arrow-left-long"></i>
          <span>Back to {type} vans</span>
        </div>
      </Link>

      <img src={van.imageUrl} alt="van-pic" />
      
      {van && (<div className='van-info'>
        <span className={setVanTypeColor(van.type) + ' ' + 'van-info-type'}>{van.type}</span>
        <h2>{van.name}</h2>
        <span>${van.price}<span>/day</span></span>
        <p>{van.description}</p>
        <Link to="/login">Rent this van</Link>
      </div>)}
    </div>
  )
}