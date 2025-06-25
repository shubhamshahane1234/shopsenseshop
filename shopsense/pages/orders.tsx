import React, { useEffect } from "react";
import mongoose from "mongoose";
import Order from "@/models/Order";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className="relative overflow-x-auto">
      <h1 className="text-xl text-center font-bold py-6">My Orders</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        {/* dark:text-gray-400 table */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          {/* //dark:text-gray-400   thead */}
          {/* dark:bg-gray-700 */}
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  border-gray-200">
            {/* dark:bg-gray-800 dark:border-gray-700  tr */}
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              {/* dark:text-white th */}
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b  border-gray-200">
            {/* dark:bg-gray-800 dark:border-gray-700 tr */}
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              {/* dark:text-white th */}
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white ">
            {/* dark:bg-gray-800 tr */}
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              {/* dark:text-white  th */}
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI as string);
  }

  const Orders = await Order.find({ slug: context.query.slug });

  return {
    props: {
      Orders: JSON.parse(JSON.stringify(Orders)),
    },
  };
};

export default Orders;
