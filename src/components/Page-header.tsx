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
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-image/bg.image.png')" }}
    >
      <div className="w-full bg-black bg-opacity-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <nav className="flex justify-center items-center space-x-2 text-sm text-white">
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
    </div>
  )
}
