import Image from "next/image";

export default function Browse() {
 return (
 <div className="flex flex-col gap-[30px] md:gap-[60px] pt-[30px] md:pt-0 items-center bg-[hashtag#F4F5F7] px-4">
 <div className="w-fit text-center">
 <h1 className="text-Font font-bold text-[32px] mt-10">Browse The Range</h1>
 <p className="text-Font1 font-normal text-[20px]">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 </p>
 </div>
 <div className="flex flex-wrap justify-center gap-[20px]">
 {/* Dining Section */}
 <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
 <div className="">
 <Image
 src="/browse.images/dining.img.jpg"
 alt="Dining"
 className="rounded-[4px] w-full"
 width={900}
 height={100}
 />
 </div>
 <div className="w-full text-center">
 <p className="font-semibold text-[24px] text-Font">Dining</p>
 </div>
 </div>

 {/* Living Section */}
 <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
 <div className="">
 <Image
 src="/browse.images/living.img.jpg"
 alt="Living"
 className="rounded-[4px] w-full"
 width={900}
 height={100}
 />
 </div>
 <div className="w-full text-center">
 <p className="font-semibold text-[24px] text-Font">Living</p>
 </div>
 </div>

 {/* Bedroom Section */}
 <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
 <div className="">
 <Image
 src="/browse.images/bedroom.img.jpg"
 alt="image3"
 className="rounded-[4px] w-full"
 width={900}
 height={100}
 />
 </div>
 <div className="w-full text-center">
 <p className="font-semibold text-[24px] text-Font">Bedroom</p>
 </div>
 </div>
 </div>
 </div>
 );
}

