import Hero from "@/components/Hero";
import Browse from "@/components/Browse"
import Products from "@/components/Products"
import Furniture from "@/components/Furniture";
import BeautifulRooms from "@/components/BeautifulRooms";

export default function Home() {
  return ( 
    <div>
      <Hero />
      <Browse />
      <Products />
      <BeautifulRooms />
      <Furniture />
    </div>
  );
}
