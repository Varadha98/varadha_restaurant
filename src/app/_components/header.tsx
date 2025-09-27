// src/components/Header.tsx
"use client";

import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png"

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-amber-600 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={logo.src} alt="Logo" className="w-24 md:w-24 lg:w-24 mb-2" />
          <span className="text-2xl">🍽️</span>
          <span className="text-xl font-bold">Varadha Vegetarian Restaurant</span>
        </div>

        <nav className="flex items-center gap-6">
          <button onClick={() => router.push("/cart")} className="text-sm text-gray-700">Cart</button>
          <button onClick={() => router.push("/profile")} className="text-sm text-gray-700">Profile</button>
        </nav>
      </div>
    </header>
  );
}
