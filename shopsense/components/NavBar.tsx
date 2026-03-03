import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

const NavBar = ({ logout, user }: any) => {
  const [dropdown, setdropdown] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* 🔥 Modern SHOPSENSE Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide group">
          <span className="text-gray-900">SHOP</span>
          <span className="text-[#368286] group-hover:text-[#368286] transition duration-300">
            SENSE
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Tshirts", "Mugs", "Hoodies"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`relative hover:text-[#368286] transition duration-300 ${
                router.route === `/${item}` ? "text-[#368286]" : "text-gray-700"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-xl text-gray-700">
          {/* Profile */}
          {user?.value && (
            <div
              className="relative"
              onMouseEnter={() => setdropdown(true)}
              onMouseLeave={() => setdropdown(false)}
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

          {/* Login Button */}
          {!user.value && (
            <Link href="/login">
              {/* <!-- From Uiverse.io by nathAd17 -->  */}
              <button className="flex justify-center gap-2 items-center mx-auto shadow-xl text-base bg-gray-50 backdrop-blur-md lg:font-medium isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#63b0b4] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1.5 overflow-hidden border-2 rounded-full group">
                Login
                <svg
                  className="w-5 h-5 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </Link>
          )}

          {/* Icons */}
          <Link href="/wishlist">
            <IoHeartOutline className="hover:text-emerald-500 transition cursor-pointer" />
          </Link>

          <Link href="/ShoppingCart">
            <AiOutlineShoppingCart className="hover:text-emerald-500 transition cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Dropdown Style */}
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
