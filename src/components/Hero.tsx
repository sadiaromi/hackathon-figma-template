import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[300px] lg:h-[812.53px] md:h-[600px]">
        <Image
          src="/hero/hero.image.jpg"
          alt="Furniture background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="md:absolute md:inset-0 md:bg-transparent">
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 mt-0 lg:px-16 py-8 md:py-0">
          <div className="md:grid md:grid-cols-2 md:h-full">
            <div className="hidden md:block"></div>
            
            <div className="flex items-center justify-center md:justify-end">
              <div className="bg-[#FFF3E3] md:backdrop-blur-sm p-8 md:p-12 lg:px-6 py-8 lg:mt-44 max-w-lg">
                <div className="text-sm uppercase tracking-wider text-[#333333] mb-4 font-bold">
                  New Arrival
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B88E2F] mb-6">
                  Discover Our
                  <br />
                  New Collection
                </h1>
                <p className="text-[#333333] text-[1rem] mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <Button 
                  className="bg-[#B88E2F] hover:bg-amber-700 text-[#FFFFFF] px-8 py-6 rounded-none"
                >
                  BUY NOW
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
