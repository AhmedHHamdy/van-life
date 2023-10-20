import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Vans from "./pages/Vans/Vans"
import VanDetails from "./pages/Vans/VanDetails"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayourt"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostDetails from "./pages/Host/HostDetails"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import NotFound from "./pages/404"
import AuthRequired from "./components/AuthRequired"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/Vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="reviews" element={<Reviews />} />

              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostDetails />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
