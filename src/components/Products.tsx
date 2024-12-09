'use client'

import Image from "next/image"
import { Heart, Share2, ShoppingCart, ArrowLeftRight } from 'lucide-react'
import { useState } from "react"

interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  discount?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image: "/products.images/image-1.png",
    discount: 30
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Luxury sofa chair",
    price: 2500000,
    image: "/products.images/img-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: "/products.images/img-3.png",
    discount: 50
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: "/products.images/image-4.png",
    isNew: true
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    image: "/products.images/image-5.png",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    image: "/products.images/image-6.png",
    isNew: true
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    image: "/products.images/image-7.png",
    discount: 50
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    image: "/products.images/image-8.png",
    isNew: true
  },
]

export default function ProductGrid() {
  const [likedProducts, setLikedProducts] = useState<number[]>([])

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.discount && (
                <span className="absolute top-4 left-4 bg-[#E97171] text-white px-2 py-1 rounded-md text-sm">
                  -{product.discount}%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-[#2EC1AC] text-white px-2 py-1 rounded-md text-sm">
                  New
                </span>
              )}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <ArrowLeftRight className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      likedProducts.includes(product.id) 
                        ? "text-[#E97171] fill-[#E97171]" 
                        : "text-gray-600"
                    }`} 
                  />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.description}</p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-8 py-2 border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-yellow-600 hover:text-white transition-colors duration-300 rounded-md">
          Show More
        </button>
      </div>
</div>
)
}