import "../../App.css"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
  const [vanDetail] = useOutletContext()
  return (
    <h4 className="van-pricing">${vanDetail.price}<span>/day</span></h4>
  )
}