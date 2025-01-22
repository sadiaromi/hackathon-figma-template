"use client"
import { useEffect, useState } from "react"
import type { Product } from "../../app/types"
import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { useWishlistStore } from "@/store/wishlist"
import { Heart } from "lucide-react"
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


export default function Shop() {
  const [products, setProducts] = useState<Product[]>([])
  const { wishlist, toggleWishlist } = useWishlistStore()

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        title,
        "productImage": productImage.asset->url,
        price,
        dicountPercentage,
        "discountedPrice": price - (price * dicountPercentage / 100),
        description,
        isNew
      }`
      const data: Product[] = await client.fetch(query)
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-[150px] sm:h-[200px] md:h-[250px] bg-[url('/bg-image/bg.image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4">
          <div className="relative pt-12 sm:pt-16 md:pt-20 text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Shop</h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Link href="/" className="hover:underline">
                <span>Home</span>
              </Link>
              <span>{">"}</span>
              <Link href="/shop" className="hover:underline">
                <span>Shop</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:gap-6 sm:p-6 md:p-8">
        {products.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product._id)

          return (
            <div key={product._id} className="border p-4 rounded-lg shadow-sm relative flex flex-col">
              {/* Wishlist Heart Icon */}
              <button
                onClick={() =>
                  toggleWishlist({
                    id: product._id,
                    title: product.title,
                    image: product.productImage,
                    discountedPrice: product.discountedPrice,
                  })
                }
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors ${
                    isWishlisted ? "text-red-500 fill-red-500" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Clickable Product Image */}
              <Link href={`/product/${product._id}`} className="flex-grow">
                <div className="relative w-full pb-[100%]">
                  <Image
                    src={product.productImage}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded absolute top-0 left-0 w-full h-full"
                  />
                  {/* New Badge on the Image */}
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
              </Link>

              {/* Product Info */}
              <div className="mt-4">
                <h3 className="text-sm sm:text-base font-semibold line-clamp-2">{product.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mt-1">{product.description}</p>
                <p className="text-gray-800 font-bold mt-2 text-sm sm:text-base">
                  Rs {product.discountedPrice.toFixed(2)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center space-x-4  ml-20 mt-8 mb-6">
                <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">1</button>
                <button className="px-4 py-2 hover:bg-[#B88E2F] rounded">2</button>
                <button className="px-4 py-2 hover:bg-[#B88E2F] rounded">3</button>
                <button className="px-4 py-2 hover:bg-[#B88E2F] rounded">Next</button>
              </div>

               {/* Features Section */}
                            <footer className="bg-[#fdf7f1] py-8">
                              <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                  <GoTrophy size={40} className="mx-auto text-gray-800" />
                                  <h4 className="font-bold text-gray-800">High Quality</h4>
                                  <p className="text-gray-600 text-sm">Crafted from top materials</p>
                                </div>
                                <div>
                                  <AiOutlineSafetyCertificate
                                    size={40}
                                    className="mx-auto text-gray-800"
                                  />
                                  <h4 className="font-bold text-gray-800">Warranty Protection</h4>
                                  <p className="text-gray-600 text-sm">Over 2 years</p>
                                </div>
                                <div>
                                  <MdOutlineLocalShipping size={40} className="mx-auto text-gray-800" />
                                  <h4 className="font-bold text-gray-800">Free Shipping</h4>
                                  <p className="text-gray-600 text-sm">Orders over $50</p>
                                </div>
                                <div>
                                  <RiCustomerService2Line size={40} className="mx-auto text-gray-800" />
                                  <h4 className="font-bold text-gray-800">24/7 Support</h4>
                                  <p className="text-gray-600 text-sm">Dedicated support</p>
                                </div>
                              </div>
                            </footer>
      </main>
      )
}