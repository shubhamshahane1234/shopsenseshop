import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

const NavBar = ({ logout, user }: any) => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const navItems = ["Tshirts", "Mugs", "Hoodies"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-gray-900">SHOP</span>
          <span className="text-[#368286]">SENSE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`hover:text-[#368286] transition duration-300 ${
                router.route === `/${item}` ? "text-[#368286]" : "text-gray-700"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-xl text-gray-700">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>

          {/* Profile */}
          {user?.value && (
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <CgProfile className="cursor-pointer hover:text-emerald-500 transition" />

              {dropdown && (
                <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-gray-100 p-3">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/myaccount" className="dropdown-item">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link href="/orders" className="dropdown-item">
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link href="/aboutus" className="dropdown-item">
                        About Us
                      </Link>
                    </li>
                    <li
                      onClick={logout}
                      className="dropdown-item cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Login */}
          {!user?.value && (
            <Link
              href="/login"
              className="hidden md:block px-4 py-2 rounded-full bg-[#368286] text-white text-sm font-medium hover:bg-[#2f6f72] transition"
            >
              Login
            </Link>
          )}

          {/* Icons */}
          <Link href="/wishlist" className="hidden md:block">
            <IoHeartOutline className="hover:text-emerald-500 transition cursor-pointer" />
          </Link>

          <Link href="/ShoppingCart" className="hidden md:block">
            <AiOutlineShoppingCart className="hover:text-emerald-500 transition cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-700 hover:text-[#368286] font-medium"
            >
              {item}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-200 space-y-4">
            {user?.value ? (
              <>
                <Link href="/myaccount" className="block text-gray-700">
                  My Account
                </Link>
                <Link href="/orders" className="block text-gray-700">
                  Orders
                </Link>
                <button
                  onClick={logout}
                  className="block text-left text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block bg-[#368286] text-white text-center py-2 rounded-lg"
              >
                Login
              </Link>
            )}

            <div className="flex gap-6 pt-2 text-xl">
              <Link href="/wishlist">
                <IoHeartOutline />
              </Link>
              <Link href="/ShoppingCart">
                <AiOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown Styling */}
      <style jsx>{`
        .dropdown-item {
          display: block;
          padding: 6px 10px;
          border-radius: 8px;
          transition: 0.2s ease;
        }
        .dropdown-item:hover {
          background: #f3f4f6;
        }
      `}</style>
    </header>
  );
};

export default NavBar;
