"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import avatar from "../../assets/avatar.png"
import { BellIcon, SearchIcon } from "lucide-react"

function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-transparent p-4 flex items-center justify-between z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white bg-opacity-30 rounded-md py-2 pl-4 pr-10 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button className="absolute right-0 top-0 h-full px-3 text-white bg-teal-500 rounded-r-md">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <button className="text-white relative">
          <BellIcon />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>

        <Link to="/profile" className="block">
          <img src={avatar} alt="User Profile" className="h-10 w-10 rounded-full border-2 border-white" />
        </Link>
      </div>
    </header>
  )
}

export default Header

