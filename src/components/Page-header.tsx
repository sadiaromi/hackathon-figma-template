import Link from "next/link"

interface PageHeaderProps {
  title: string
  breadcrumbs: Array<{
    label: string
    href: string
  }>
}

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="w-full bg-[#fdf7f1]">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <nav className="flex justify-center items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <span key={item.href}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
              {index < breadcrumbs.length - 1 && <span className="ml-2">{">"}</span>}
            </span>
          ))}
        </nav>
      </div>
</div>
)
}