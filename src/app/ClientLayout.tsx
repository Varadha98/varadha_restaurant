// src/app/ClientLayout.tsx  (Client component)
"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";

  // list routes that should NOT show header/footer
  const hideFor = ["/login", "/signup"];
  // if you have nested auth routes like /login/reset use startsWith:
  const hideHeaderFooter = hideFor.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="min-h-screen">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
