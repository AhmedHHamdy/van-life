import "../../App.css"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const [vanDetail] = useOutletContext()
  return (
      <img className="van-photos" src={vanDetail.imageUrl} alt={`${vanDetail.name} pic`} />
  )
}