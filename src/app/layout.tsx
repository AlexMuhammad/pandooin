import type { Metadata } from "next";
import localFont from "next/font/local";
import { Alex_Brush, Albert_Sans, Unbounded } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layouts/navbar";
import Providers from "@/components/parts/provider";
import Footer from "@/components/layouts/footer";

const theSignature = localFont({
  src: "../styles/fonts/Thesignature.ttf",
  display: "swap",
  style: "normal",
  weight: "400",
  variable: "--font-signature",
});

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
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
  manifest: "/manifest.json",
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
        className={`${alex_brush.variable} ${unbounded.variable} ${albert_sans.variable} ${theSignature.variable}`}
      >
        <Providers>
          <main className="relative min-h-screen bg-white font-albert-sans">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
