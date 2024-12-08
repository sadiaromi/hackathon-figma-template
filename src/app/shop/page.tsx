"use client"
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Shop() {
  const Shop = [
    {
      id: 1,
      name: "Syltherine",
      fullname: "Stylish cafe chair",
      discount: "-30%",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      image: "/products.images/image-1.png",
      },
      
 {
  id: 2,
  name: "Leviosa",
  fullname: "Stylish cafe chair",
  price: "Rp 2.500.000",
  originalPrice: "",
  image: "/products.images/img-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/products.images/img-3.png",
    },
    {
      id: 4,
      name: "Respira",
      fullname: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: "",
      image: "/products.images/image-4.png",
      },
      {
        id: 5,
        name: "Syltherine",
        fullname: "Stylish cafe chair",
        discount: "-30%",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        image: "/products.images/image-1.png",
        },
        {
          id: 6,
          name: "Leviosa",
          fullname: "Stylish cafe chair",
          price: "Rp 2.500.000",
          originalPrice: "",
          image: "/products.images/img-2.png",
          },
          {
            id: 7,
            name: "Lolito",
            fullname: "Luxury big sofa",
            discount: "-50%",
            price: "Rp 7.000.000",
            originalPrice: "Rp 14.000.000",
            image: "/products.images/img-3.png",
            },
            
      {id: 8,
      name: "Respira",
      fullname: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: "",
      image: "/products.images/image-4.png",
      },
    {
      id: 9,
      name: "Syltherine",
      fullname: "Stylish cafe chair",
      discount: "-30%",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      image: "/products.images/image-1.png",
      },
      {
        id: 10,
        name: "Leviosa",
        fullname: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "",
        image: "/products.images/img-2.png",
        },
        {
          id: 11,
          name: "Lolito",
          fullname: "Luxury big sofa",
          discount: "-50%",
          price: "Rp 7.000.000",
          originalPrice: "Rp 14.000.000",
          image: "/products.images/img-3.png",
          },
          {id: 12,
            name: "Respira",
            fullname: "Outdoor bar table and stool",
            price: "Rp 500.000",
            originalPrice: "",
            image: "/products.images/image-4.png",
            },
      
  
    {
      id: 13,
      name: "Syltherine",
      fullname: "Stylish cafe chair",
      discount: "-30%",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      image: "/products.images/image-1.png",
      },
      {
        id: 14,
        name: "Leviosa",
        fullname: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "",
        image: "/products.images/img-2.png",
        },
        {
          id: 15,
          name: "Lolito",
          fullname: "Luxury big sofa",
          discount: "-50%",
          price: "Rp 7.000.000",
          originalPrice: "Rp 14.000.000",
          image: "/products.images/img-3.png",
          },
          {id: 16,
            name: "Respira",
            fullname: "Outdoor bar table and stool",
            price: "Rp 500.000",
            originalPrice: "",
            image: "/products.images/image-4.png",
            },
          ];

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
    
};    
 

  
