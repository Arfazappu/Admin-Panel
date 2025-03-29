function MetricCard({ title, value, color = "teal", linkText, linkUrl }) {
    const colorClasses = {
      teal: "bg-teal-50 text-teal-500",
      green: "bg-green-50 text-green-500",
      yellow: "bg-yellow-50 text-yellow-500",
      red: "bg-red-50 text-red-500",
    }
  
    return (
      <div className={`rounded-lg shadow-md overflow-hidden ${colorClasses[color]}`}>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">{value}</div>
          </div>
        </div>
  
        {linkText && (
          <div className="bg-white bg-opacity-20 p-2 text-right">
            <a href={linkUrl} className="text-sm hover:underline">
              {linkText}
            </a>
          </div>
        )}
      </div>
    )
  }
  
  export default MetricCard
  
  