import Image from "next/image";
export default function Furniture() {
 return (
 <section className="py-16 bg-gray-50">
 {/* Header */}
 <div className="text-center mb-10 px-4">
 <h2 className="text-lg font-bold text-gray-500 uppercase tracking-wide">
 Share your setup with
 </h2>
 <h3 className="text-3xl font-extrabold text-gray-800">
 hashtag#FuniroFurniture
 </h3>
 </div>

 <Image 
 src={"/furniture/furniture.image.png"}
 alt="Furniture"
 width={1400}
 height={700}/>
</section>
 );
};



