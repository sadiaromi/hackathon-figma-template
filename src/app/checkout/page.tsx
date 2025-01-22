import React from 'react';
import Link from 'next/link';
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const Checkout = () => {
    return (
        <>
          <div className="relative h-[150px] sm:h-[200px] md:h-[250px] bg-[url('/bg-image/bg.image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4">
          <div className="relative pt-12 sm:pt-16 md:pt-20 text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Checkout</h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link href="/" className="hover:underline"><span>Home</span></Link>
              <span>{">"}</span>
              <Link href="/checkout" className="hover:underline"><span>Checkout</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Billing Details Section */}
  <div className="border border-gray-200 rounded-lg p-6 bg-white">
    <h2 className="text-xl font-semibold mb-4 Poppins">Billing details</h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First Name */}
      <div>
        <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1 Poppins">First Name</label>
        <input
          type="text"
          id="first-name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your first name"
        />
      </div>
      {/* Last Name */}
      <div>
        <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1 Poppins">Last Name</label>
        <input
          type="text"
          id="last-name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your last name"
        />
      </div>
      {/* Company Name */}
      <div className="md:col-span-2">
        <label htmlFor="company-name" className="block text-sm text-gray-600 mb-1 Poppins">Company Name (Optional)</label>
        <input
          type="text"
          id="company-name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your company name"
        />
      </div>
      {/* Country / Region */}
      <div className="md:col-span-2">
        <label htmlFor="country" className="block text-sm text-gray-600 mb-1 Poppins">Country / Region</label>
        <select
          id="country"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
           <option>Sri Lanka</option>
          <option>Pakistan</option>
          <option>United States</option>
          <option>United Kingdom </option>
          <option>Canada</option>
          <option>Australia</option>
          <option>India</option>
          <option>Germany</option>
          <option>France</option>
          <option>China</option>
          <option>Japan</option>
          <option>South Korea</option>
          <option>Brazil</option>
          <option>South Africa</option>
        </select>
      </div>
      {/* Street Address */}
      <div className="md:col-span-2">
        <label htmlFor="street-address" className="block text-sm text-gray-600 mb-1 Poppins">Street Address</label>
        <input
          type="text"
          id="street-address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your street address"
        />
      </div>
      {/* City */}
      <div>
        <label htmlFor="city" className="block text-sm text-gray-600 mb-1 Poppins">Town / City</label>
        <input
          type="text"
          id="city"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your city"
        />
      </div>
      {/* Province */}
      <div>
        <label htmlFor="province" className="block text-sm text-gray-600 mb-1 Poppins">Province</label>
        <select
          id="province"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option>Western Province</option>
          <option>Southern Province</option>
          <option>Westhern Province</option>
          <option>Northern Province</option>
        </select>
      </div>
      {/* ZIP Code */}
      <div className="flex flex-col gap-2">
        <div className="flex-grow">
          <label htmlFor="zip" className="block text-sm text-gray-600 mb-1 Poppins">ZIP Code</label>
          <input
            type="text"
            id="zip"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your ZIP code"
          />
        </div>
      </div>
      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm text-gray-600 mb-1 Poppins">Phone</label>
        <input
          type="text"
          id="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your phone number"
        />
      </div>
      {/* Email */}
      <div className="md:col-span-2">
        <label htmlFor="email" className="block text-sm text-gray-600 mb-1 Poppins">Email Address</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your email address"
        />
      </div>
      {/* Additional Information */}
      <div className="md:col-span-2">
        <label htmlFor="additional-info" className="block text-sm text-gray-600 mb-1 Poppins">Additional Information</label>
        <textarea
          id="additional-info"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter any additional information"
        ></textarea>
      </div>
    </form>
  </div>

  {/* Order Summary Section */}
  <div className="border border-gray-200 rounded-lg p-6 bg-white">
    <h2 className="text-xl font-semibold mb-4 Poppins">Product</h2>
    <div className="mb-4">
      {/* Product Details */}
      <div className="flex justify-between mb-2 Poppins">
        <span>Asgard Sofa x 1</span>
        <span>Rs. 250,000.00</span>
      </div>
      {/* Subtotal */}
      <div className="flex justify-between Poppins">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      {/* Total */}
      <div className="flex justify-between font-semibold text-lg Poppins">
        <span>Total</span>
        <span className="text-[#B88E2F]">Rs. 250,000.00</span>
      </div>
    </div>

    {/* Payment Method */}
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2 Poppins">Payment Method</h3>
      <div>
        <label className="flex items-center mb-2 Poppins">
          <input type="radio" name="payment-method" className="mr-2" />
          Direct Bank Transfer
        </label>
        <p className="text-sm text-gray-500 mb-2 Poppins">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <label className="flex items-center mb-2 Poppins">
          <input type="radio" name="payment-method" className="mr-2" />
          Cash on Delivery
        </label>
      </div>
    </div>

    {/* Place Order Button */}
    <button className="h-[64px] w-[205px] border py-2 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 Poppins">
      Place Order
    </button>
  </div>
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
      
       
    
      </>
    );
  };

  export default Checkout;