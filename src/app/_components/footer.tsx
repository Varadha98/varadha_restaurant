// src/components/Footer.tsx
import logo from "@/assets/logo.png"
export default function Footer() {
  return (
    <footer className="border-t bg-green-600">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 flex flex-col items-center justify-between gap-3 text-white ">
        <img src={logo.src} alt="Logo" className="w-32 md:w-32 lg:w-40 mb-2" />
        <p> Varadha vegetarian restaurant began with a simple dream in Chennai and has grown into a global symbol of authentic South Indian vegetarian cuisine. 
          With over 41 years of tradition, taste, and trust, we continue to serve delicious food made with passion, discipline, and innovation across the world.</p>
        <div>
        <p>© {new Date().getFullYear()} Varadha vegetarian restaurant, All Rights Reserved.</p>
        </div>
        <div>
        <p>📍 Porur, Chennai · ☎ 98765 43210</p>
        </div>
      </div>
    </footer>
  );
}
