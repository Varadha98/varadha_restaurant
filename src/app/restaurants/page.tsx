"use client";

import { useRouter } from "next/navigation";
import image10 from "@/assets/image10.jpg";
import image4 from "@/assets/image4.jpg";
import image9 from "@/assets/image9.jpg";
import { useState } from "react";
import Carousel from "@/app/_components/carousel";


export default function RestaurantsPage() {

  const router = useRouter();

   const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const increaseQty = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQty = (id: number) => {
    setQuantities((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: Math.max(0, prev[id] - 1) };
    });
  };


  return (

    <div className="min-h-screen bg-amber-100 p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 sm:p-4 justify-center items-center">
        <Carousel />
       </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
       
   <div className="p-2 justify-center items-center mx-auto ">
    <h1 className="text-2xl font-bold text-center mb-6">BREAKFAST</h1>
    <img
  src={image10.src} alt="image10" className="w-64 rounded-xl cursor-pointer hover:opacity-80 hover:scale-105 transition-transform "
  onClick={()=> router.push("/menu/breakfast")}
/>
</div>
      <div className="p-2 justify-center items-center mx-auto ">
        <h1 className="text-2xl font-bold text-center mb-6">LUNCK</h1>
    <img
  src={image4.src} alt="image4" className="w-72 rounded-xl cursor-pointer hover:opacity-80 hover:scale-105 transition-transform "
  onClick={()=> router.push("/menu/lunch")}
/>
</div>
      <div className="p-2 justify-center items-center mx-auto ">
        <h1 className="text-2xl font-bold text-center mb-6">DINNER</h1>
    <img
  src={image9.src} alt="image9" className="w-64 rounded-xl cursor-pointer hover:opacity-80 hover:scale-105 transition-transform "
  onClick={()=> router.push("/menu/dinner")}
/>
</div>
</div>

      
      </div>
    </div>


  );
}
