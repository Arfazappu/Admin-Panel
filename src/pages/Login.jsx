import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "../components/common/AuthLayout"
import Input from "../components/common/Input"
import Button from "../components/common/Button"


function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login submitted:", formData)
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Log in</h1>
        <p className="text-gray-500 mb-6">Welcome to Free shops App controller</p>

        <form onSubmit={handleSubmit}>
          <Input
            label="User Name"
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="flex justify-center mb-6">
            <Link to="" className="text-gray-500 hover:text-teal-600 text-sm">
              Forgot Password
            </Link>
          </div>

          <div className="mb-4">
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </div>

          <div className="text-center">
            <Link to="/register" className="text-blue-500 hover:underline">
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login

