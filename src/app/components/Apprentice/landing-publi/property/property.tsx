import { Heart, Share, MapPin } from "lucide-react"

export default function PropertyGallery() {
  return (
    <div className="border border-blue-500 rounded-lg overflow-hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="relative h-[300px] bg-gray-200 rounded-lg">
          <div className="absolute top-2 right-2 flex gap-2">
            <button className="bg-white p-1 rounded-full">
              <Share className="h-4 w-4" />
            </button>
            <button className="bg-white p-1 rounded-full">
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative bg-gray-200 rounded-lg">
            <div className="absolute top-2 right-2 flex gap-2">
              <button className="bg-white p-1 rounded-full">
                <Share className="h-4 w-4" />
              </button>
              <button className="bg-white p-1 rounded-full">
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg">
            <div className="absolute top-2 right-2 flex gap-2">
              <button className="bg-white p-1 rounded-full">
                <Share className="h-4 w-4" />
              </button>
              <button className="bg-white p-1 rounded-full">
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-end items-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <MapPin className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

