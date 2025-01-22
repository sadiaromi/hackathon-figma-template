"use client"
import Image from "next/image"
import Link from "next/link"
import { Search, User, Heart, ShoppingCart, Menu, Minus, Plus, X } from "lucide-react"
import { useCartStore } from "@/store/cart"
import { useWishlistStore } from "@/store/wishlist"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const { items, removeItem, updateQuantity } = useCartStore()
  const { wishlist } = useWishlistStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    if (searchQuery.trim() === "") {
      alert("Please enter a search query")
      return
    }

    const encodedQuery = encodeURIComponent(searchQuery)
    router.push(`/search-bar?query=${encodedQuery}`)
  }

  return (
    <header className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-between bg-white h-[70px] px-4 md:px-8">
        <div className="flex items-center">
          <Image src={"/header.image/logo.img.png"} alt="Logo" width={185} height={41} />
        </div>

       

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 gap-6 ml-auto mr-4">
          <Link href="/" className="hover:underline underline-offset-2">
            Home
          </Link>
          <Link href="/shop" className="hover:underline underline-offset-2">
            Shop
          </Link>
          <Link href="/blog" className="hover:underline underline-offset-2">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-2">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center space-x-4 flex-grow justify-center max-w-md">
          <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="border rounded px-4 py-2 w-full"
            />
            <button type="submit" className="p-2 bg-gray-200 rounded-full">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
         
        <button className="flex items-center space-x-2">
        <Link href="/account" className="relative w-8 h-8 flex items-center justify-center">
              <User className="h-5 w-5" />
              </Link>
            </button>
          <Link href="/wishlist" className="relative w-8 h-8 flex items-center justify-center">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-4">
                {items.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <>
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={item.image}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p>Rs. {item.price.toLocaleString()}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-1 bg-gray-200 rounded-full"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 bg-gray-200 rounded-full"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 bg-red-100 text-red-600 rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <div className="mt-4 border-t pt-4">
                      <p className="font-semibold">Total: Rs. {totalPrice.toLocaleString()}</p>

                      <div className="flex justify-between mt-4 flex-wrap">
                        <Link href="/checkout" className="border border-black rounded-full px-6 py-2 font-semibold hover:bg-black hover:text-white transition w-full sm:w-auto mb-2 sm:mb-0">
                        Checkout
                        </Link>
                        
                        <Link href="/productcomparison" className="border border-black rounded-full px-6 py-2 font-semibold hover:bg-black hover:text-white transition w-full sm:w-auto">
                        Comparison
                        </Link>
                        </div>
                        </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
         
           {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:underline underline-offset-2">
              Home
            </Link>
            <Link href="/shop" className="hover:underline underline-offset-2">
              Shop
            </Link>
            <Link href="/blog" className="hover:underline underline-offset-2">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-2">
              Contact
            </Link>
            
          </nav>
        </div>
      )}

      {/* Mobile Search Bar */}
      <div className="sm:hidden p-4 bg-white">
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="border rounded px-4 py-2 w-full"
          />
          <button type="submit" className="p-2 bg-gray-200 rounded-full">
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>
      </header>
   )
}