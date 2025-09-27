import Carousel from "@/app/_components/carousel";
import k4 from "@/assets/k4.jpg"

export default function Home() {
  return (

    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg bg-black/10 backdrop-blur-lg shadow-lg" >
  {/* Profile Picture */}
  <div className="flex flex-col items-center">
    <img
      src="/default-avatar.png"
      alt="Profile"
      className="w-24 h-24 rounded-full object-cover"
    />
    <button className="mt-2 text-blue-500">Change Photo</button>
  </div>

  {/* User Info */}
  <div className="mt-6 space-y-4">
    <div>
      <label className="block text-sm font-medium">Name</label>
      <input
        type="text"
        className="w-full border p-2 rounded"
        value="John Doe"
      />
    </div>
    <div>
      <label className="block text-sm font-medium">Email</label>
      <input
        type="email"
        className="w-full border p-2 rounded"
        value="john@example.com"
        disabled
      />
    </div>
    <div>
      <label className="block text-sm font-medium">Phone</label>
      <input
        type="tel"
        className="w-full border p-2 rounded"
        value="+91 9876543210"
      />
    </div>
  </div>

  {/* Actions */}
  <div className="mt-6 flex justify-between">
    <button className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
    <button className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
  </div>
</div>

  );
}
