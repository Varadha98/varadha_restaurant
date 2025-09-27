"use client";

const menuItems = [
  {
    id: 1,
    name: "Veg Meals",
    description: "Soft steamed idlis served with hot sambar & chutney.",
    price: 40,
    image: "/menu/v2.jpg",
  },
  {
    id: 2,
    name: "Sambar Sadam",
    description: "Crispy dosa served with hot sambar & chutney.",
    price: 70,
    image: "/menu/s1.jpg",
  },
  {
    id: 3,
    name: "Puli Sadam",
    description: "Poori served with hot sambar & chutney. ",
    price: 60,
    image: "/menu/p2.jpg",
  },
  {
    id: 4,
    name: "Thair Sadam",
    description: "Pongal served with hot sambar & chutney.",
    price: 75,
    image: "/menu/s4.jpg",
  },
  {
    id: 5,
    name: "Veg Biryani",
    description: "Pongal served with hot sambar & chutney.",
    price: 70,
    image: "/menu/vb1.jpg",
  },
  {
    id: 6,
    name: "Veg Fried Rice",
    description: "Pongal served with hot sambar & chutney.",
    price: 80,
    image: "/menu/vf1.jpg",
  }
];


export default function RestaurantsPage() {

    
  return (

    <div className="min-h-screen bg-amber-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
  {menuItems.map((item) => (
    <div key={item.id} className="border rounded-lg p-8 shadow hover:shadow-lg transition mx-auto">
      <img src={item.image} alt={item.name} className="size-64 object-cover rounded justify-center items-center mx-auto w-full" />
      <h2 className="text-lg font-bold mt-2">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="text-indigo-600 font-semibold mt-2">₹{item.price}</p>

      {/* Quantity & Add to Cart */}
      <div className="flex items-center mt-3 space-x-2">
        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span>1</span>
        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
        <button className="ml-auto bg-indigo-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>
    </div>
  ))}
</div>
  );
}
