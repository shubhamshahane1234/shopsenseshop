import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import mongoose from "mongoose";
import Image from "next/image";

const Tshirts = (products: any) => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container h-auto px-5 py-24 mx-auto my-auto">
          <div className="flex flex-wrap   ">
            {Object.keys(products.products).map((item: any, index) => {
              return (
                <>
                  <Link
                    key={index}
                    href={`/product/${products.products[item].slug}`}
                    className="h-70 p-4 w-full lg:w-1/5 md:w-1/2  shadow-md "
                  >
                    {" "}
                    <div>
                      <img
                        alt="ecommerce"
                        className="object-cover object-top w-full h-72"
                        src={products.products[item].img}
                      />

                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          T-shirt
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {products.products[item].title}
                        </h2>
                        <p className="mt-1">₹{products.products[item].price}</p>
                        {products.products[item].size.includes("S") && (
                          <span>S, </span>
                        )}
                        {products.products[item].size.includes("M") && (
                          <span>M, </span>
                        )}
                        {products.products[item].size.includes("L") && (
                          <span>L, </span>
                        )}
                        {products.products[item].size.includes("XL") && (
                          <span>XL, </span>
                        )}
                        {products.products[item].size.includes("XXL") && (
                          <span>XXL, </span>
                        )}
                        {/* <p className="mt-1">S, M, L, XL, XXL</p> */}
                        <div className="flex">
                          {products.products[item].color.includes("red") && (
                            <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-5 h-5"></button>
                          )}
                          {products.products[item].color.includes("yellow") && (
                            <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-5 h-5-"></button>
                          )}
                          {products.products[item].color.includes("green") && (
                            <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-5 h-5"></button>
                          )}
                          {products.products[item].color.includes("blue") && (
                            <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-5 h-5"></button>
                          )}
                          {products.products[item].color.includes("black") && (
                            <button className="border-2 border-gray-300 ml-1  bg-black rounded-full w-5 h-5"></button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}

            <Link
              href={"/product/red t T-shirt polyster"}
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md "
            >
              {" "}
              <div>
                <img
                  alt="ecommerce"
                  className="object-cover object-top w-full h-100"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/u/9/m-755-4-755-6-ftx-original-imagmuarcznzzugn.jpeg?q=70"
                />

                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    T-shirt
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Casual Black
                  </h2>
                  <p className="mt-1">₹16.00</p>
                  <p className="mt-1">S, M, L, XL, XXL</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI as string);
  }
  const products = await Product.find({ category: "t-shirts" });
  let tshirts: any = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color?.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size?.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }

  return { props: { products: JSON.parse(JSON.stringify(tshirts)) } };
};

export default Tshirts;
