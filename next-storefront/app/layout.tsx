import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Next Storefront",
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />
        <Container className='py-20'>{children}</Container>
      </body>
    </html>
  );
}
