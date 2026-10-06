import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://quickuppaistudio.us"),
  title: "AI Video Ads for DTC Brands | Quickupp AI Studio",
  description:
    "Quickupp AI Studio creates conversion-focused AI video ads for DTC and e-commerce brands without traditional production overhead. Create more creative variations for Meta, Instagram, TikTok and short-form channels.",
  keywords: [
    "AI video ads",
    "DTC video ads",
    "AI UGC videos",
    "AI avatar ads",
    "TikTok DTC ads",
    "Meta video ads",
    "Quickupp AI Studio",
  ],
  openGraph: {
    title: "AI Video Ads for DTC Brands | Quickupp AI Studio",
    description:
      "Create more ads. Test more ideas. Find what works. Conversion-focused AI video ads for DTC and e-commerce brands.",
    url: "https://quickuppaistudio.us/",
    siteName: "Quickupp AI Studio",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Ads for DTC Brands | Quickupp AI Studio",
    description:
      "Create more ads. Test more ideas. Find what works. Conversion-focused AI video ads for DTC and e-commerce brands.",
    images: ["/images/logo.png"],
  },
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
