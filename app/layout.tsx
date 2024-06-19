import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import BackButton from "@/components/BackButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Sneakers",
  description: "Next Sneakers",
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
        <Navigation/>
        <BackButton/>
        <main className="max-w-sm mx-auto px-2.5"> 
          {children}
        </main>
      </body>
    </html>
  );
}
