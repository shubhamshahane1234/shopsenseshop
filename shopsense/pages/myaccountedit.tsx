import React from "react";

const Myaccountedit = () => {
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

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white shadow-md rounded-md p-6 max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold border-b pb-3 mb-6">
            Edit Details
          </h2>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Mobile Number*
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value="7350180807"
                readOnly
              />
              <button className="border px-4 py-2 text-sm font-medium rounded">
                CHANGE
              </button>
            </div>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value="Shubham shahane"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Email
            </label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              value="shubhamshahane41@gmail.com"
            />
          </div>

          {/* Gender */}
          <div className="mb-4 flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Male"
                // checked={gender === "Male"}
                // onChange={() => setGender("Male")}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Female"
                // checked={gender === "Female"}
                // onChange={() => setGender("Female")}
              />
              <span>Female</span>
            </label>
          </div>

          {/* Birthday */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Birthday (dd/mm/yyyy)"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Alternate Mobile Details */}
          <h3 className="text-sm font-medium text-gray-700 mb-2 mt-4">
            Alternate mobile details
          </h3>
          <div className="mb-4">
            <div className="flex gap-2">
              <span className="flex items-center px-3 border border-r-0 rounded-l text-gray-500">
                +91
              </span>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-r"
                placeholder="Mobile Number"
              />
            </div>
          </div>

          {/* Hint Name */}
          <div className="mb-6">
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Hint name"
            />
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button className="bg-[#2c9499] hover:bg-[#61a3a6] text-white font-semibold px-6 py-2 rounded w-full">
              SAVE DETAILS
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Myaccountedit;
