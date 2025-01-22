import Hero from "@/components/Hero";
import Browse from "@/components/Browse";
import FeaturedProducts from "@/components/FeaturedProducts";
import Furniture from "@/components/Furniture";
import BeautifulRooms from "@/components/BeautifulRooms";

export default function Home() {
  return ( 
    <div>
      <Hero />
      <Browse />
     <FeaturedProducts />
      <BeautifulRooms />
      <Furniture />
    </div>
  );
}
