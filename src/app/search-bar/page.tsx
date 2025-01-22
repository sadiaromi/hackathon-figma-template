import { Product } from "@/app/types"
import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"

async function fetchProducts(query: string): Promise<Product[]> {
  const data: Product[] = await client.fetch(
    `*[_type == "product" && title match "${query}*"]{
      _id,
      title,
      "productImage": productImage.asset->url,
      price,
      dicountPercentage,
      "discountedPrice": price - (price * dicountPercentage / 100),
      description,
      isNew
    }`
  )
  return data
}

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
  const query = searchParams.query || ""
  const searchResults = await fetchProducts(query)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Search Results for: {query}</h1>
      {searchResults.length === 0 ? (
        <p className="text-center text-gray-600">No products found for &quot;{query}&quot;</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-sm text-center relative flex flex-col">
              <Link href={`/product/${product._id}`} className="flex-grow">
                <div className="relative w-full pb-[100%] mb-4">
                  <Image
                    src={product.productImage}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </Link>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold">Rs {product.discountedPrice.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
