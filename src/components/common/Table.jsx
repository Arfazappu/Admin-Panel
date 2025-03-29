import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"

function Table({
  columns,
  data,
  selectable = false,
  pagination = true,
  itemsPerPage = 5, // Changed to 5 rows per page
  showingText,
  onDelete,
  className = "",
}) {
  const [selectedRows, setSelectedRows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = data.slice(startIndex, endIndex)

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((_, index) => index))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index))
    } else {
      setSelectedRows([...selectedRows, index])
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleDelete = () => {
    if (selectedRows.length > 0 && onDelete) {
      onDelete(selectedRows)
      setSelectedRows([])
    }
  }

  // Generate dynamic showing text
  const dynamicShowingText = data.length > 0 
    ? `Showing ${startIndex + 1}-${Math.min(endIndex, data.length)} of ${data.length} total users`
    : "No users to display";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {selectable && (
                <th className="py-3 px-4 text-left">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedRows.length === data.length && data.length > 0}
                    className="rounded"
                  />
                </th>
              )}
              {columns.map((column, index) => (
                <th key={index} className="py-3 px-4 text-left font-medium">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {selectable && (
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      onChange={() => handleSelectRow(startIndex + rowIndex)}
                      checked={selectedRows.includes(startIndex + rowIndex)}
                      className="rounded"
                    />
                  </td>
                )}
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-3 px-4">
                    {column.render ? column.render(row, startIndex + rowIndex) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="flex items-center justify-between mt-4 px-4 py-2">
          <div className="flex items-center">
            {onDelete && selectedRows.length > 0 && (
              <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                Delete Selected
              </button>
            )}
            {/* Always show dynamic text */}
            <span className="text-sm text-gray-500 ml-2">{dynamicShowingText}</span>
          </div>

          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-500 mr-2">Displaying page</span>
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 text-sm rounded ${currentPage === 1 ? "text-gray-400" : "text-gray-700 hover:bg-gray-100"}`}
            >
              First
            </button>

            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-1 rounded ${currentPage === 1 ? "text-gray-400" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <ChevronLeftIcon />
            </button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show pages around current page
              let pageNum
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              return (
                <button
                  key={i}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    currentPage === pageNum ? "bg-teal-500 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-1 rounded ${currentPage === totalPages ? "text-gray-400" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <ChevronRightIcon />
            </button>

            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 text-sm rounded ${currentPage === totalPages ? "text-gray-400" : "text-gray-700 hover:bg-gray-100"}`}
            >
              Last
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Table