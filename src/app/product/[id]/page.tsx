"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import type { Product } from "@/app/types"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { useCartStore } from "@/store/cart"

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == "${id}"][0] {
        _id,
        title,
        description,
        "productImage": productImage.asset->url,
        price,
        dicountPercentage,
        "discountedPrice": price - (price * dicountPercentage / 100),
        isNew
      }`

      const data: Product = await client.fetch(query)
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  if (!product) return <p className="text-center py-10">Loading...</p>

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product._id,
        name: product.title,
        price: product.discountedPrice,
        image: product.productImage,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src={product.productImage || "/placeholder.svg"}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">{product.description}</p>

          <p className="text-xl md:text-2xl font-semibold mb-6">Price: Rs {product.discountedPrice.toFixed(2)}</p>

          {/* Quantity Increase or Decrease */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-l transition-colors"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-r transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-black hover:bg-gray-800 text-white px-6 py-2 rounded transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      </div>
      )
}