import type { Metadata } from "next";
import logo from "../public/logo.png";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xcellent Tires",
  description:
    "At Xcellent Auto Repair, we believe in providing reliable, honest, and transparent services. Our state-of-the-art facility is equipped with the latest technology to diagnose and repair your vehicle efficiently and accurately. Whether you need routine maintenance, complex repairs, or specialized services, we have the expertise to handle it all. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
