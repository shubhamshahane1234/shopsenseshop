import React from "react";
import Wishlistitem from "../components/wishlistitem";

const Wishlist = () => {
  const wishlist = [
    {
      img: "/items/shorts.jpg",
      title: "Mast & Harbour Men Grey Shorts",
      price: 1999,
      outOfStock: true,
    },
    {
      img: "/items/shirt.jpg",
      title: "HIGHLANDER Men Green Slim Shirt",
      price: 379,
      actualPrice: 1899,
      discount: "80%",
    },
    {
      img: "/items/perfume.jpg",
      title: "Bella Vita Organic Luxury Set",
      price: 565,
      actualPrice: 849,
      discount: "33%",
    },
    {
      img: "/items/shoes1.jpg",
      title: "Nike Men City Rep TR",
      price: 4995,
      outOfStock: true,
    },
    {
      img: "/items/shoes2.jpg",
      title: "Nike MC Trainer",
      price: 5495,
      outOfStock: true,
    },
    {
      img: "/items/shoes3.jpg",
      title: "Puma PWRFrame Trainer",
      price: 7999,
      outOfStock: true,
    },
    {
      img: "/items/shoes4.jpg",
      title: "CULT Men Crosstrain",
      price: 2099,
      actualPrice: 5999,
      discount: "65%",
    },
    {
      img: "/items/shoes5.jpg",
      title: "CULT Men Grey X1",
      price: 2149,
      actualPrice: 4999,
      discount: "57%",
    },
    {
      img: "/items/perfume2.jpg",
      title: "Armaf Club De Nuit",
      price: 4750,
      outOfStock: true,
    },
    {
      img: "/items/shirt2.jpg",
      title: "The Indian Garage Co Shirt",
      price: 1749,
      outOfStock: true,
    },
    {
      img: "/items/shoes6.jpg",
      title: "Red Tape Men Perforated Sneaker",
      price: 1272,
      actualPrice: 6799,
      discount: "81%",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-xl font-semibold mb-4">
        My Wishlist <span className="text-gray-500">(204 items)</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {wishlist.map((item, index) => (
          <Wishlistitem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
