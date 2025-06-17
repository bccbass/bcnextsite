import type { Metadata } from "next";
import { Roboto, Julius_Sans_One } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "@/lib/lenis";

const roboto = Roboto({
  variable: "--font-sans",
  display: "swap", // Important for LCP
  preload: true,
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const juliusSans = Julius_Sans_One({
  variable: "--font-feature",
  display: "swap", // Important for LCP
  preload: true,
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

// const rubik = Rubik_Pixels({
//   variable: "--font-rubik",
//   display: "swap", // Important for LCP
//   preload: true,
//   subsets: ["latin"],
//   weight: ["400"],
//   style: ["normal"],
// });

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
          className={`${roboto.variable} ${juliusSans.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
