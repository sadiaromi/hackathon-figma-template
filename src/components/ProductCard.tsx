import Link from "next/link"
import Image from "next/image"
import { useWishlistStore } from "@/store/wishlist"
import { Heart } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  image: string
  price: number
  discountedPrice: number
  description: string
}

export default function ProductCard({ id, title, image, discountedPrice, description }: ProductCardProps) {
  const { wishlist, toggleWishlist } = useWishlistStore()
  const isWishlisted = wishlist.some((product) => product.id === id)

  return (
    <div className="border p-4 rounded-lg shadow-sm text-center relative flex flex-col h-full">
      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist({ id, title, image, discountedPrice })}
        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md z-10"
      >
        {isWishlisted ? (
          <Heart className="text-red-500 w-5 h-5" fill="red" />
        ) : (
          <Heart className="text-gray-500 w-5 h-5" />
        )}
      </button>

      <div className="relative w-full pb-[100%] mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded absolute top-0 left-0 w-full h-full"
        />
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-3 flex-grow">{description}</p>

      <p className="text-gray-800 font-bold text-sm sm:text-base mb-2">Rs {discountedPrice.toFixed(2)}</p>

      {/* View Details Button */}
      <Link href={`/product/${id}`} className="block">
        <button className="w-full bg-black hover:bg-gray-800 text-white px-4 py-2 rounded text-sm sm:text-base transition-colors">
          View Details
        </button>
      </Link>
      </div>
      )
}