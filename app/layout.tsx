import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sungo's Aventuras",
  description: "Descubra Angola e viva experiências inesquecíveis com a Sungo's Aventuras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}