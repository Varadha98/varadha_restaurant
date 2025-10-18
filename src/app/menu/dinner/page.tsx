"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";


const menuItems = [
  {
    id: 1,
    name: "Idli",
    description: "Soft steamed idlis served with hot sambar & chutney.",
    price: 40,
    image: "/menu/image11.jpg",
  },
  {
    id: 2,
    name: "Dosa",
    description: "Crispy dosa served with hot sambar & chutney.",
    price: 70,
    image: "/menu/image9.jpg",
  },
  {
    id: 3,
    name: "Chapati",
    description: "Poori served with hot sambar & chutney. ",
    price: 60,
    image: "/menu/ch3.jpg",
  },
  {
    id: 4,
    name: "Idiyappam",
    description: "Pongal served with hot sambar & chutney.",
    price: 75,
    image: "/menu/image21.jpg",
  },
  {
    id: 5,
    name: "Parotta",
    description: "Pongal served with hot sambar & chutney.",
    price: 70,
    image: "/menu/pa2.jpg",
  }
];

export default function RestaurantsPage() {

  const [userId, setUserId] = useState<string | null>(null);

useEffect(() => {
  const id = localStorage.getItem("userId");
  setUserId(id);
}, []);

const [quantities, setQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
  const initial: Record<number, number> = {};
  menuItems.forEach(item => {
    initial[item.id] = 1; // default quantity
  });
  setQuantities(initial);
}, []);

const increaseQty = (id: number) => {
  setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
};

const decreaseQty = (id: number) => {
  setQuantities(prev => ({ ...prev, [id]: Math.max(prev[id] - 1, 1) }));
};

   
  return (

    <div className="min-h-screen bg-amber-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
  {menuItems.map((item) => (
    <div key={item.id} className="border rounded-lg p-8 shadow hover:shadow-lg transition mx-auto">
      <img src={item.image} alt={item.name} className="size-64 object-cover rounded justify-center items-center mx-auto w-full" />
      <h2 className="text-lg font-bold mt-2">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="text-indigo-600 font-semibold mt-2">₹{item.price}</p>

      {/* Quantity & Add to Cart */}
      {/* <div className="flex items-center mt-3 space-x-2">
        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span>1</span>
        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
        <button className="ml-auto bg-indigo-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </div> */}

      <div className="flex items-center mt-3 space-x-2">
  <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
  <span>{quantities[item.id]}</span>
  <button onClick={() => increaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
  <button onClick={() => addToCart(item)} className="ml-auto bg-indigo-500 text-white px-3 py-1 rounded">
    Add
  </button>
</div>

    </div>
  ))}
</div>
  );
}
