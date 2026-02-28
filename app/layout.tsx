import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Combat Studios | Bangkok's Premier MMA & Fight Gym",
  description: "Train MMA, Muay Thai, BJJ, Kickboxing, and Wrestling at Bangkok's only air-conditioned fight studio. Expert coaching, flexible memberships, private training available.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
