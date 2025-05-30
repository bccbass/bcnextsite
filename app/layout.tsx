import type { Metadata } from "next";
import { Roboto, Julius_Sans_One, Rubik_Pixels } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "@/lib/lenis";


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

const rubik = Rubik_Pixels({
  variable: "--font-rubik",
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
          className={`flex${roboto.variable} ${juliusSans.variable} ${rubik.variable}  antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
