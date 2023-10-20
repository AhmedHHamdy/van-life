import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from || "/host"

  function handleChange(e) {
    const { name, value } = e.target
    console.log(name)
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")
    loginUser(loginFormData)
      .then(data => {
        setError(null)
        localStorage.setItem("loggedin", true)
        navigate(from, { replace: true })
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setStatus("idle")
      })
  }

  return (
    <div className="login-page-section">
      { 
        location.state?.message && 
            <h3 className="login-error">{location.state.message}</h3>
      }
      <h1>Sign in to your account</h1>
      {
        error?.message &&
            <h3 className="login-error">{error.message}</h3>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email address"
            value={loginFormData.email}
          />
          <input 
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            value={loginFormData.password}
          />
        </div>
        <button>Login in</button>
      </form>
    </div>
  )
}