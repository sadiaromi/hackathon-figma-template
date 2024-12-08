"use client";
import Image from 'next/image'
import Link from 'next/link'
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Cart() {
  return (
    <div className="min-h-screen bg-white">

      {/* Cart Header */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Link href="/" className="text-gray-600">Home</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-900">Cart</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="bg-[#F9F1E7] p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
            </div>
            <div className="mt-4 border rounded-lg p-4">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="flex items-center space-x-4">
                  <Image src="/cart.images/cart.img (2).png" alt="Product" width={100} height={100} className="rounded-lg" />
                  <span className="text-sm text-gray-600">Asgaard sofa</span>
                </div>
                <div className="text-sm">Rs. 250,000.00</div>
                <div>
                  <input type="number" min="1" value="1" className="w-16 p-2 border rounded-lg" />
                </div>
                <div className="text-sm">Rs. 250,000.00</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-[#F9F1E7] p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-4">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <button className="w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
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


</div>
)
}