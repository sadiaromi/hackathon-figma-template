import Image from "next/image";

export default function Hero() {
 return (

<div className="overflow-x-hidden relative">
<div className="relative w-full">
 <Image
 src={"/hero/hero.image.jpg"}
 alt="Hero Image"
 width={1100}
 height={700}
 priority
 className="w-full h-auto"
 
 />
 {/* Hero Text Section */}
 <div className="bg-[#FFF3E3] hidden md:block w-[643] h-[400] absolute top-[20%] left-[55%] rounded-lg px-2 py-3">
 <h6 className="font-bold ml-6">New Arrival</h6>
 <h3 className="text-[#B88E2F] ml-6 flex justify-center font-poppins font-extrabold text-[3.25rem] ">Discover Our <br /> New Collection</h3>
 <p className="leading-loose ml-6 font-poppins font-medium text-[1rem] mb-3">
 Lorem ipsum dolor sit amet consectetur adipisicing elit Ut
 <br />
  elit tellus, luctus nec ullamcorper mattis.</p>
 <button className="bg-[#B88E2F] ml-6 pt-4 pr-12 pb-4 pl-12 text-white">BUY NOW</button>
 </div>
</div>
 </div>
 );
}

