import '../App.css'

export default function Van(props) {

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



  return(
    <div className='van-details'>
      <img src={props.image} alt="van-pic" />
      <div className='van-info'>
        <h2>{props.name}</h2>
        <span>${props.price} <br /><span>/day</span></span>
        <span className={setVanTypeColor(props.type)}>{props.type}</span>
      </div>
    </div>
  )
}