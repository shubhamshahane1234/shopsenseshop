import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

// type MyComponentProps = {
//   user: any; // Use correct type instead of any
// };
const NavBar = ({ logout, user }: any) => {
  const [dropdown, setdropdown] = useState(false);
  const router = useRouter();
  console.log(router.route);
  return (
    <div className="shadow-lg">
      <nav>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <div className="w-[60px] h-[60px] flex justify-center items-center ">
              <img
                src="/shopsensenav.png"
                className="w-[60px] h-[60px] mt-[5px]"
              />
            </div>
            <h1 className="ml-1 text-xl mr-0">
              Shop<span className=" text-xl text-[#2c9499]">sense</span>{" "}
            </h1>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              href="/Tshirts"
              className={`mr-5 hover:text-[#26686c] ${
                router.route === "/Tshirts" && "text-[#26686c]"
              } font-bold`}
            >
              T-Shirts
            </Link>
            <Link
              href="/Mugs"
              className={`mr-5 hover:text-[#26686c] ${
                router.route === "/Mugs" && "text-[#26686c]"
              } font-bold`}
            >
              Mugs
            </Link>
            <Link
              href="/Hoodies"
              className={`mr-5 hover:text-[#26686c] ${
                router.route === "/Hoodies" && "text-[#26686c]"
              } font-bold`}
            >
              Hoodies
            </Link>
            {/* <a className="mr-5 hover:text-gray-900">Sweaters</a> */}
          </nav>
          <div className="inline-flex items-center cursor-pointer  space-x-2 border-0 py-1 px-3 text-2xl  rounded mt-4 md:mt-0">
            {user.value && (
              <>
                <div
                  className="relative"
                  onMouseEnter={() => setdropdown(true)}
                  onMouseLeave={() => setdropdown(false)}
                >
                  <CgProfile
                    onMouseEnter={() => setdropdown(true)}
                    onMouseLeave={() => setdropdown(false)}
                  />
                  {dropdown && (
                    <>
                      <div
                        className="bg-white shadow-md z-10 absolute right-0 top-full mt-0.4  w-[clamp(130px,15vw,180px)] md: rounded-md px-[2vw] "
                        onMouseEnter={() => setdropdown(true)}
                        onMouseLeave={() => setdropdown(false)}
                      >
                        <ul>
                          <Link href="/myaccount">
                            <li className="py-1 text-lg hover:text-gray-500 cursor-pointer">
                              My Account
                            </li>
                          </Link>
                          <Link href="/orders">
                            <li className="py-1 text-lg hover:text-gray-500 cursor-pointer">
                              Orders
                            </li>
                          </Link>
                          <Link href="/aboutus">
                            <li className="py-1 text-lg hover:text-gray-500 cursor-pointer">
                              About us
                            </li>
                          </Link>
                          <li
                            onClick={logout}
                            className="py-1 text-lg hover:text-gray-500 cursor-pointer"
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>{" "}
              </>
            )}
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
            {/* <IoHeartOutline /> */}

            <Link href="/ShoppingCart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
