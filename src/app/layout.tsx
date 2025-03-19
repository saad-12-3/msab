import type { Metadata } from "next";
import { Tiro_Bangla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

// bangla font setting
const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"], 
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  title: "msab||#MHS",
  description: "#MHS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tiroBangla.className}`}>
         <Header />
        {children}
      </body>
    </html>
  );
}
