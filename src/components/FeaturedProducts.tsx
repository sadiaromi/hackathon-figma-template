"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { Product } from "@/app/types"
import { client } from "@/sanity/lib/client"
import ProductCard from "@/components/ProductCard"

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][0...8] {
        _id,
        title,
        description,
        "productImage": productImage.asset->url,
        price,
        dicountPercentage,
        "discountedPrice": price - (price * dicountPercentage / 100)
      }`
      const data: Product[] = await client.fetch(query)
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <section className="py-8 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            image={product.productImage}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => router.push("/shop")}
          className="px-6 py-3 md:px-10 md:py-4 border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors duration-300 rounded-md text-sm md:text-base"
        >
          Show More
        </button>
      </div>
    </section>
    )
}