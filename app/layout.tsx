import type { Metadata } from "next";
import { Roboto, Raleway, Julius_Sans_One } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "@/lib/lenis";

const ralewaySans = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const juliusSans = Julius_Sans_One({
  variable: "--font-feature",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Benjamin Campbell",
  description:
    "Website for Sydney based musician and composer Benjamin Campbell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          draggable="false"
          className={`flex${roboto.variable} ${juliusSans.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
