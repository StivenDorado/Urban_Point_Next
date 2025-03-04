import { Star } from "lucide-react"

export default function ReviewsList() {
  const reviews = [
    { name: "Juan", rating: "4.8", date: "Hace 2 semanas" },
    { name: "Cristhian", rating: "4.7", date: "Hace 1 mes" },
    { name: "Julian", rating: "4.9", date: "Hace 3 semanas" },
    { name: "Sebas", rating: "4.6", date: "Hace 2 meses" },
    { name: "Kevin", rating: "4.8", date: "Hace 1 mes" },
    { name: "Muriel", rating: "4.9", date: "Hace 1 semana" },
  ]

  return (
    <div>
      <div className="relative mb-4">
        <input type="text" placeholder="Dejar tu reseña..." className="w-full p-3 pr-10 border rounded-full" />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-1"></div>
            <span className="font-medium text-sm">{review.name}</span>
            <div className="flex items-center text-xs">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="ml-1">{review.rating}</span>
            </div>
            <span className="text-xs text-gray-500">{review.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

