import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sungo's Aventuras | Angola DMC",
  description: "Your local partner for extraordinary Angolan journeys. Culture, adventure, nature, wildlife and heritage across Angola and Southern Africa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}
