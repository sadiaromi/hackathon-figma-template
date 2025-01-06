import Link from "next/link";
import Image from "next/image"
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Shop() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-[150px] sm:h-[200px] md:h-[250px] bg-[url('/bg-image/bg.image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4">
          <div className="relative pt-12 sm:pt-16 md:pt-20 text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Shop</h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link href="/" className="hover:underline"><span>Home</span></Link>
              <span>{">"}</span>
              <Link href="/shop" className="hover:underline"><span>Shop</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-[#F9F1E7] flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <button className="flex items-center space-x-2">
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2">
            <span>Grid</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Showing 1-16 of 32 results</span>
          <select className="border rounded p-1">
            <option>Default</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
                width={300}
                height={300}
              />
              {product.tag && (
                <span className="absolute top-4 right-4  bg-[#E97171] text-white px-2 py-1 rounded-full text-sm">
                  {product.tag}
                </span>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="font-semibold">Rp {product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through">
                    Rp {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-2 p-8">
        <button className="px-3 py-1 bg-[#B88E2F] text-white rounded">1</button>
        <button className="px-3 py-1 hover:bg-[#fdf7f1] rounded">2</button>
        <button className="px-3 py-1 hover:bg-[#fdf7f1] rounded">3</button>
        <button className="px-3 py-1 hover:bg-[#fdf7f1] rounded">Next</button>
      </div>

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

const products = [
  {
    id: 1,
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: 3500000,
    image: "/products.images/image-1.png",
    tag: "-30%"
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: "/products.images/img-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    oldPrice: 14000000,
    image: "/products.images/img-3.png",
    tag: "-50%"
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: "/products.images/image-4.png",
    tag: "New"
  },
  {
    id: 5,
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: 3500000,
    image: "/products.images/image-1.png",
    tag: "-30%"
  },
  {
    id: 6,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: "/products.images/img-2.png",
  },
  {
    id: 7,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    oldPrice: 14000000,
    image: "/products.images/img-3.png",
    tag: "-50%"
  },
  {
    id: 8,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: "/products.images/image-4.png",
    tag: "New"
  },
  {
    id: 9,
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: 3500000,
    image: "/products.images/image-1.png",
    tag: "-30%"
  },
  {
    id: 10,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: "/products.images/img-2.png",
  },
  {
    id: 11,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    oldPrice: 14000000,
    image: "/products.images/img-3.png",
    tag: "-50%"
  },
  {
    id: 12,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: "/products.images/image-4.png",
    tag:"New"
},
{
  id: 13,
  name: "Sytherine",
  description: "Stylish cafe chair",
  price: 2500000,
  oldPrice: 3500000,
  image: "/products.images/image-1.png",
  tag: "-30%"
},
{
  id: 14,
  name: "Leviosa",
  description: "Stylish cafe chair",
  price: 2500000,
  image: "/products.images/img-2.png",
},
{
  id: 15,
  name: "Lolito",
  description: "Luxury big sofa",
  price: 7000000,
  oldPrice: 14000000,
  image: "/products.images/img-3.png",
  tag: "-50%"
},
{
  id: 16,
  name: "Respira",
  description: "Outdoor bar table and stool",
  price: 500000,
  image: "/products.images/image-4.png",
  tag:"New"
},
]