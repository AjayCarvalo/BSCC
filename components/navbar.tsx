'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // icon package, or replace with SVG

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-red-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Club Name */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <img src="/logo.jpg" alt="1920" width={100} height={100} className="rounded-md" />
          </Link>
          <span className="text-white text-xl font-semibold">Braywood Cricket Club</span>
        </div>

        {/* Hamburger Toggle - Mobile Only */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <ActionButtons />
        </div>
      </div>

      {/* Nav Links - Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <NavLinks />
          <ActionButtons />
        </div>
      )}
    </nav>
  )
}

const NavLinks = () => (
  <>
    <Link href="/" className="block text-white hover:text-blue-500">Home</Link>
    <Link href="/fixtures" className="block text-white hover:text-blue-500">Fixtures</Link>
    <Link href="/table" className="block text-white hover:text-blue-500">Table</Link>
    <Link href="/news" className="block text-white hover:text-blue-500">News</Link>
    <Link href="/media" className="block text-white hover:text-blue-500">Media</Link>
    <Link href="/contacts" className="block text-white hover:text-blue-500">Contacts</Link>
    <Link href="/information" className="block text-white hover:text-blue-500">Information</Link>
  </>
)

const ActionButtons = () => (
  <div className="flex flex-col md:flex-row md:space-x-4 items-center space-y-2 md:space-y-0">
    <Link href="/signup">
      <button className="bg-red-900 hover:bg-red-800 border border-white text-white  rounded-full px-5 py-2 text-sm transition">Join</button>
    </Link>
    <Link href="/login">
      <button className="bg-red-900 hover:bg-red-800 border border-white text-white rounded-full px-5 py-2 text-sm transition">Login</button>
    </Link>
  </div>
)

export default Navbar
