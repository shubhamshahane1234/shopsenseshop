import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Myaccount = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r hidden md:block">
        <h2 className="text-xl font-semibold mb-6">Account</h2>
        <p className="text-sm mb-8 text-gray-600">Shubham shahane</p>

        <ul className="space-y-6 text-sm">
          <li className="text-gray-700">Overview</li>
          <li className="text-gray-700">Orders & Returns</li>
          <li className="text-gray-700">Coupons</li>
          <li className="text-gray-700">Myntra Credit</li>
          <li className="text-gray-700">MynCash</li>
          <li className="text-green-600 font-semibold">Profile</li>
          <li className="text-gray-700">Saved Cards</li>
          <li className="text-gray-700">Saved UPI</li>
          <li className="text-gray-700">Saved Wallets/BNPL</li>
          <li className="text-gray-700">Addresses</li>
          <li className="text-gray-700">Myntra Insider</li>
          <li className="text-gray-700">Delete Account</li>
        </ul>

        <div className="mt-8 border-t pt-4 text-sm">
          <p className="text-gray-700">Terms of Use</p>
          <p className="text-gray-700">Privacy Policy</p>
        </div>
      </aside>

      {/* Main Profile Section */}
      <main className="flex-1 p-6">
        <div className="bg-white shadow-md rounded-md p-6 max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold border-b pb-3 mb-6">
            Profile Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-sm">
            <div className="font-medium">Full Name</div>
            <div>Shubham shahane</div>

            <div className="font-medium">Mobile Number</div>
            <div>7350180807</div>

            <div className="font-medium">Email ID</div>
            <div>shubhamshahane41@gmail.com</div>

            <div className="font-medium">Gender</div>
            <div>MALE</div>

            <div className="font-medium">Date of Birth</div>
            <div className="text-gray-500">- not added -</div>

            <div className="font-medium">Location</div>
            <div className="text-gray-500">- not added -</div>

            <div className="font-medium">Alternate Mobile</div>
            <div className="text-gray-500">- not added -</div>

            <div className="font-medium">Hint Name</div>
            <div className="text-gray-500">- not added -</div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/myaccountedit">
              {" "}
              <button className="bg-[#2c9499] hover:bg-[#61a3a6] text-white font-semibold px-6 py-2 rounded">
                EDIT
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Myaccount;
