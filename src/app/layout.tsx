import "@/styles/globals.css";

import type { Metadata } from "next";
import { Alex_Brush, Albert_Sans, Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const alex_brush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
  weight: "400",
});

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Zamrood - Pandooin ${new Date().getFullYear()}`,
  description:
    "Online Travel Agent in Indonesia that offers authentic tour packages in nature and the countryside.",
  icons: [{ rel: "icon", url: "/logo.jpeg" }],
  authors: [{ name: "Alex Muhammad", url: "http://localhost:3000/" }],
  openGraph: {
    title: `Zamrood - Authentic Tour Packages in Indonesia ${new Date().getFullYear()}`,
    description:
      "Explore Indonesia with Zamrood, your online travel agent for authentic nature and countryside tour packages. Experience the beauty of Indonesia like never before.",
    url: "https://www.zamrood.com",
    type: "website",
    images: [
      { url: "/og-image.jpg", width: 800, height: 600, alt: "Zamrood Logo" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alex_brush.variable} ${unbounded.variable} ${albert_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
