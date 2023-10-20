import "../../App.css"
import { useOutletContext } from "react-router-dom"

export default function HostDetails() {
  const [vanDetail] = useOutletContext()

  return (
    <section className="detail-container">
        <h4>Name: <span>{vanDetail.name}</span></h4>
        <h4>Category: <span>{vanDetail.type}</span></h4>
        <h4>Description: <span>{vanDetail.description}</span></h4>
        <h4 className="visibility-heading">Visibility: <span>Public</span></h4>
    </section>
  )
}