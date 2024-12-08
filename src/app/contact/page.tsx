"use client";
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <h2 className="text-2xl font-semibold mb-2">Get In Touch With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We Have Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">
              234 5th St Avenue, New<br />
              York NY10001, United<br />
              States
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">
              Mobile: +1847-545-1791<br />
              Phone: +1847-545-1791
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Working Time</h3>
            <p className="text-gray-600">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4A373] text-white py-3 px-6 rounded-md hover:bg-[#c49666] transition-colors"
          >
            Submit
          </button>
        </form>
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