

function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-8 rounded-md transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

