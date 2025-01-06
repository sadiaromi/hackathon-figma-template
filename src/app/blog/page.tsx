import { BlogCard } from "@/components/Blog-card";
import { PageHeader } from "@/components/Page-header";
import { Sidebar } from "@/components/Sidebar";
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


const posts = [
  {
    title: "Going all-in with millennial design",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/blog-images/blog-1.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood",
    slug: "going-all-in-with-millennial-design"
  },
  {
    title: "Exploring new ways of decorating",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/blog-images/blog-2.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Handmade",
    slug: "exploring-new-ways-of-decorating"
  },
  {
    title: "Handmade pieces that took time to make",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/blog-images/blog-3.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood",
    slug: "handmade-pieces-that-took-time-to-make"
  }
]

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 }
]

const recentPosts = [
  {
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    image: "/blog-images/post-1.png",
    slug: "going-all-in-with-millennial-design"
  },
  {
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    image: "/blog-images/post-2.png",
    slug: "exploring-new-ways-of-decorating"
  },
  {
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    image: "/blog-images/post-3.png",
    slug: "Handmade pieces that took time to make"
  },
  {
    title: "modern-home-in-milan",
    date: "14 Oct 2022",
    image: "/blog-images/post-4.png",
    slug: "modern-home-in-milan"
  },
  {
    title: "Colorful office makeover",
    date: "14 Oct 2022",
    image: "/blog-images/post-5.png",
    slug: "Colorful office makeover"
  }

]

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        
        ]}
      />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
              <div className="flex justify-center space-x-4  ml-56 mt-8">
                <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">1</button>
                <button className="px-4 py-2 hover:bg-[#B88E2F] rounded">2</button>
                <button className="px-4 py-2 hover:bg-[#B88E2F] rounded">3</button>
                <button className="px-4 py-2 hover:bg-[#B88E2F] rounded">Next</button>
              </div>
            </div>
            <div>
              <Sidebar categories={categories} recentPosts={recentPosts} />
            </div>
          </div>
        </div>
        {/* Features Section */}
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
      </main>
</div>
)
}