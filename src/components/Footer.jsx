import '../App.css'

export default function Footer() {
  let currentYear = new Date().getFullYear()
  return (
    <footer>
      <small>{`Ⓒ ${currentYear} #VANLIFE`}</small>
    </footer>
  )
}