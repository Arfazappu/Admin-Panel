import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "../components/common/AuthLayout"
import Input from "../components/common/Input"
import Button from "../components/common/Button"

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    console.log("Form submitted:", formData)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Create New Account</h1>
        <p className="text-gray-500 mb-6">Welcome to Free shops App controller</p>

        <form onSubmit={handleSubmit}>
          <Input label="Your Name" type="text" id="name" value={formData.name} onChange={handleChange} required />

          <Input label="Email" type="email" id="email" value={formData.email} onChange={handleChange} required />

          <Input label="Phone Number" type="tel" id="phone" value={formData.phone} onChange={handleChange} required />

          <Input
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="mt-8 mb-4">
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>

          <div className="text-center">
            <Link to="/login" className="text-blue-500 hover:underline">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Register

