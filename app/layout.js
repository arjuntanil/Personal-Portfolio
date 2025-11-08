import { Outfit, Ovo, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my professional portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${outfit.variable} ${ovo.variable} ${bebasNeue.variable} antialiased bg-white leading-8 overflow-x-hidden`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}