import { MapPin, Phone, Clock} from 'lucide-react'
import Link from 'next/link'
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


export default function Contact() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#fdf7f1] py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Contact</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-gray-500">Contact</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Address</h3>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Abc"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Abc@def.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="This is an optional"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Hi! I'd like to ask about"
              />
            </div>

            <button
              type="submit"
              className="w-300 h-12 bg-[#B88E2F] text-white py-3 px-28 rounded-md hover:bg-amber-700 transition-colors"
            >
              Submit
            </button>
          </form>
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


 </main>
)
}