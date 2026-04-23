import { Albert_Sans, Barlow } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const primary = Albert_Sans({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
});

const secondary = Barlow({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-secondary",
});

export const metadata = {
  metadataBase: new URL("https://jorgearaya.com"),
  title: "Jorge Araya | jorgearaya.com",
  description:
    "I'm Jorge Araya, a web developer specializing in WordPress, Next.js & Laravel. Explore my work and services to boost your digital presence.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    title: "Jorge Araya",
  },
  openGraph: {
    title: "Jorge Araya | Web Developer",
    description:
      "I'm Jorge Araya, a web developer specializing in WordPress, Next.js & Laravel.",
    url: "https://jorgearaya.com",
    siteName: "Jorge Araya",
    images: [
      {
        url: "https://jorgearaya.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Araya | Web Developer",
    description:
      "I'm Jorge Araya, a web developer specializing in WordPress, Next.js & Laravel.",
    images: ["https://jorgearaya.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NEXT_GA = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_GA}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_GA}');
          `}
        </Script>
        <Analytics />
      </head>
      <body
        className={`${primary.variable} ${secondary.variable} font-opensans antialiased bg-background`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
