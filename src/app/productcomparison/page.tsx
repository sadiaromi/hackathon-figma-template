import Image from 'next/image'
import Link from 'next/link';
import { Star } from 'lucide-react'
import Comparison from '@/components/Comparison'
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


export default function ProductComparison() {
  const products = [
    {
      name: "Asgaard Sofa",
      price: "Rs. 250,000.00",
      rating: 4.7,
      reviews: 204,
      image: "/product-comparison-images/asgaard-sofa.png"
    },
    {
      name: "Outdoor Sofa Set",
      price: "Rs. 271,000.00",
      rating: 4.2,
      reviews: 145,
      image: "/product-comparison-images/outdoor-sofa.png"
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      
      
      {/* Hero Section */}
      <div className="relative h-[150px] sm:h-[200px] md:h-[250px] bg-[url('/bg-image/bg.image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4">
          <div className="relative pt-12 sm:pt-16 md:pt-20 text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Product Comparison</h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link href="/" className="hover:underline"><span>Home</span></Link>
              <span>{">"}</span>
              <Link href="/productcomparison" className="hover:underline"><span>Product Comparison</span></Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 p-4">
              <p className="text-base sm:text-lg font-semibold">
                Go to Product page for more Products
              </p>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">View More</p>
            </div>
            {products.map((product, index) => (
              <div key={index} className="col-span-1">
                
                  <div className="relative h-[200px] sm:h-[250px] w-full mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-base sm:text-lg font-bold text-gray-900">
                    {product.price}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      ({product.reviews} reviews)
                    </span>
                  </div>
            
              </div>
            ))}
          </div>
        </div>

        <Comparison />
        
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button className="w-full rounded-md bg-[#B88E2F] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-[#A67B1F] transition-colors">
            Add to Cart
          </button>
          <button className="w-full rounded-md bg-[#B88E2F] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-[#A67B1F] transition-colors">
            Add to Cart
          </button>
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
        
        
         </div>
        
        
      </div>
)
}