import Image from "next/image";
import React from "react";

type WishlistItemProps = {
  img: string;
  title: string;
  price: number;
  actualPrice?: number;
  outOfStock?: boolean;
  discount?: string;
};

const Wishlist = ({
  img,
  title,
  price,
  actualPrice,
  outOfStock,
  discount,
}: WishlistItemProps) => {
  return (
    <div className="border rounded-md shadow-sm overflow-hidden bg-white relative group">
      {/* Remove Icon */}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 z-10">
        ✕
      </button>

      {/* Image */}
      <div className={`relative w-full h-60 ${outOfStock ? "grayscale" : ""}`}>
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300"
        />
      </div>

      {/* Status */}
      {outOfStock && (
        <div className="absolute bottom-28 text-sm bg-white text-red-500 px-2 py-1 w-full text-center font-semibold">
          OUT OF STOCK
        </div>
      )}

      {/* Details */}
      <div className="p-3 flex flex-col gap-1">
        <h2 className="text-sm text-gray-800">{title}</h2>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span>Rs.{price}</span>
          {actualPrice && (
            <span className="line-through text-gray-500 font-normal">
              Rs.{actualPrice}
            </span>
          )}
          {discount && (
            <span className="text-green-600 font-bold">{discount} OFF</span>
          )}
        </div>
        <button
          className={`mt-2 text-sm font-medium ${
            outOfStock ? "text-red-500" : "text-pink-600"
          }`}
        >
          {outOfStock ? "SHOW SIMILAR" : "MOVE TO BAG"}
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
