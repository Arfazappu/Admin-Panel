import { Link, useLocation } from "react-router-dom"

function Sidebar({ open }) {
  const location = useLocation()

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/user-management", label: "User Management" },
    { path: "/rating-and-review", label: "Rating and Review" },
    { path: "/settings", label: "Settings" },
    { path: "/history", label: "History" },
  ]

  return (
    <aside
      className={`bg-white rounded-lg shadow-lg m-3 z-10 transition-all duration-300 ${open ? "w-64 h-screen" : "w-0 -ml-3 overflow-hidden"}`}
    >
      <div className="p-4 text-center border-b">
        <Link to="/" className="text-teal-500 text-xl font-bold">
          Logo
        </Link>
      </div>

      <nav className="mt-2">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="border-b">
              <Link
                to={item.path}
                className={`block py-3 px-4 my-1 mx-2 rounded-md transition-colors ${
                  location.pathname === item.path ? "bg-teal-500 text-white" : "text-teal-500 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

