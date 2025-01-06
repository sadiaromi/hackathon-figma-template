import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  category: string
  slug: string
}

export function BlogCard({ title, excerpt, image, author, date, category }: BlogCardProps) {
  return (
    <div>
      <article className="mb-12">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-[400px] object-cover mb-4 rounded-lg"
        />
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
          <span>{author}</span>
          <span>{date}</span>
          <span>{category}</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <span className="text-sm font-medium">Read more</span>
      </article>
    </div>
  )
}
