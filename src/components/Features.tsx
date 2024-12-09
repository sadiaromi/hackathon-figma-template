import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


export function Features() {
  return (
    <div className="container mx-auto py-8 bg-[#fdf7f1]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center space-x-4">
        <GoTrophy size={40} className="mx-auto text-gray-800" />
          <div>
            <h3 className="font-bold">High Quality</h3>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <AiOutlineSafetyCertificate
              size={40}
              className="mx-auto text-gray-800"
            />
          <div>
            <h3 className="font-bold">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <MdOutlineLocalShipping size={40} className="mx-auto text-gray-800" />
          <div>
            <h3 className="font-bold">Free Shipping</h3>
            <p className="text-sm text-gray-600">Order over 150 $</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <RiCustomerService2Line size={40} className="mx-auto text-gray-800" />
          <div>
            <h3 className="font-bold">24 / 7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
</div>
)
}