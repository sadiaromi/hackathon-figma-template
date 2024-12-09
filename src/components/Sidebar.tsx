import Link from "next/link";
import Image from "next/image";

interface Category {
  name: string;
  count: number;
}

interface RecentPost {
  title: string;
  date: string;
  image: string;
  slug: string;
}

interface SidebarProps {
  categories: Category[];
  recentPosts: RecentPost[];
}

export function Sidebar({ categories, recentPosts }: SidebarProps) {
  return (
    <div>
      <div className="space-y-8">
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.name}
                className="flex justify-between items-center"
              >
                <Link
                  href={`/category/${category.name.toLowerCase()}`}
                  className="hover:underline"
                >
                  {category.name}
                </Link>
                <span className="text-gray-500">({category.count})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.slug} className="flex space-x-4">
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <Link
                href={`/blog/${post.slug}`}
                className="font-medium hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
