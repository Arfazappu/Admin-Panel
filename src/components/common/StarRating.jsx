import { StarIcon } from "lucide-react"


function StarRating({ rating, maxRating = 5 }) {
  return (
    <div className="flex">
      {Array.from({ length: maxRating }).map((_, index) => (
        <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
          <StarIcon filled={index < rating} />
        </span>
      ))}
    </div>
  )
}

export default StarRating