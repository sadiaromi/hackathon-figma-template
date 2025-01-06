"use client";
import Image from "next/image";

export default function BeautifulRooms() {
  return (
    <div className="bg-[#FCF8F3] py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="text-left pl-[100px] pr-[42px] flex flex-col gap-[25px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] font-bold text-Gray1 leading-[42px]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[16px] font-medium text-[#616161]">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you.
            </p>
          </div>
          <button className="bg-[#B88E2F] hover:bg-amber-700 text-white px-[36px] py-[12px] font-semibold text-[16px] w-fit">
            Explore More
          </button>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="relative w-full sm:w-[320px] md:w-[404px] h-[300px] sm:h-[400px] md:h-[582px] overflow-hidden">
            <Image
              src="/inspiration.images/beautifulroom.img1.png"
              alt="Inner Peace"
              className="w-full h-full object-contain"
              width={900}
              height={100}
            />
          </div>

          <div className="relative w-full sm:w-[320px] md:w-[372px] h-[300px] sm:h-[400px] md:h-[582px] overflow-hidden">
            <Image
              src="/inspiration.images/beautifulroom.img2.png"
              alt="Modern Vibes"
              className="w-full h-full object-contain"
              width={900}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
