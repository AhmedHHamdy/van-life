import { useEffect, useState } from "react"
import "../../App.css"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {
  const [vanList, setVanList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans()
        setVanList(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadVans()
  }, [])

  console.log(vanList)

  const hostVansElements = vanList.map(van => (
    <Link className="host-VansList-link" key={van.id} to={`${van.id}`}>
      <div className="host-vanList-item">
        <img src={van.imageUrl} alt="" />
        <div>
          <h2>{van.name}</h2>
          <span>${van.price}/day</span>
        </div>
      </div>
    </Link>
  ))

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
      return <h1>There was an error: {error.message}</h1>
  }

  
  return (
    <div className="host-vanList-container">
      <h1>Your listed vans</h1>
      {hostVansElements}
    </div>
  )
}