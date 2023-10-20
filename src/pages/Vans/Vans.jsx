import "../../App.css"
import { useState, useEffect } from "react"
import Van from "../../components/Van"
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
  const [vans, setVansData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const typeFilter = searchParams.get("type")

  useEffect(()=> {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVansData(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadVans()
  }, [])


  const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

  const vansElements = displayedVans.map(v => <Link key={v.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}} to={`${v.id}`}> <Van name={v.name} price={v.price} image={v.imageUrl} type={v.type}/> </Link>)


  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value == null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }

      console.log(prevParams.toString())
      return prevParams
    })
  }

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

  return (
    <div className="vans-container">

      <h1>Explore our van options 🚐</h1>

      <div className="vans-container-filters">
        <button onClick={() => handleFilterChange("type", "simple")} className={`${typeFilter == "simple" ? "selected" : ""} simpleButton`}>simple</button>
        <button onClick={() => handleFilterChange("type", "luxury")} className={`${typeFilter == "luxury" ? "selected" : ""} luxuryButton`}>Luxury</button>
        <button onClick={() => handleFilterChange("type", "rugged")} className={`${typeFilter == "rugged" ? "selected" : ""} ruggedButton`}>Rugged</button>
        {typeFilter ? <button className="clearFilterButton" onClick={() => handleFilterChange("type", null)}>Clear filters</button> : null}
      </div>

      {vansElements}
    </div>
  )
}
