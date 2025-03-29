import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react';

function Input({ label, type = "text", id, placeholder = "", value, onChange, required = false }) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-800 font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input

