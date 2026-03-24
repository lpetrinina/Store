import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s / Nordik Home",
    default: "Nordik Home",
  },
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn("font-sans", mulish.className)}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          <Container className='py-12 sm:py-20'>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
