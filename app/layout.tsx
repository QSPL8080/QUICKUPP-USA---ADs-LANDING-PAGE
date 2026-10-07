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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-purple-600 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
