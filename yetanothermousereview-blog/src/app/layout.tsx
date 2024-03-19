import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yet Another Mouse Review",
  description: "mouse reviews and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Header/>
          <Navbar />
          <div className = "flex flex-row justify-center items-center pb-2 pt-6">
            {children}
          </div>
        </body>
    </html>
  );
}
