import { useState } from "react"
import Button from "./Button"

function SearchBar({ placeholder, onSearch, buttonText = "Search" }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
      />
      <Button type="submit" className="rounded-l-none">
        {buttonText}
      </Button>
    </form>
  )
}

export default SearchBar

