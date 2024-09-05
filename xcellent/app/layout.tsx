import type { Metadata } from "next";
import logo from "../public/logo.png";
import favicon from "../app/favicon.ico";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xcellent Tires",
  description:
    "At Xcellent Auto Repair, we believe in providing reliable, honest, and transparent services. Our state-of-the-art facility is equipped with the latest technology to diagnose and repair your vehicle efficiently and accurately. Whether you need routine maintenance, complex repairs, or specialized services, we have the expertise to handle it all.",
  icons: {
    icon: "https://xcellent.vercel.app/_next/static/media/logo2.3b0c3326.png", // Make sure the path is correct
  },
  openGraph: {
    title: "Xcellent Tires",
    description:
      "Reliable, honest, and transparent auto repair services with state-of-the-art technology.",
    images: [
      {
        url: "https://xcellent.vercel.app/_next/static/media/logo2.3b0c3326.png", // Ensure this path is correct
        width: 1200,
        height: 630,
        alt: "Xcellent Tires Logo",
      },
    ],
    url: "https://xcellent.vercel.app/_next/static/media/logo2.3b0c3326.png", // Replace with your actual URL
    siteName: "Xcellent Tires",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xcellent Tires",
    description:
      "Reliable, honest, and transparent auto repair services with state-of-the-art technology.",
    images: [
      "https://xcellent.vercel.app/_next/static/media/logo2.3b0c3326.png",
    ], // Ensure this path is correct
    // creator: "@xcellentires", // Replace with your Twitter handle if applicable
  },
  metadataBase: new URL("https://xcellenttires.com"), // Add this line with your base URL
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
