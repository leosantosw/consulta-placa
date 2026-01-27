import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AppToaster from "@/components/ui/Toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olhaessecarro.com.br"),
  title: {
    default: "Olha Esse Carro",
    template: "%s | Olha Esse Carro",
  },
  description:
    "Consulte placa e histórico veicular com informações de restrições, sinistros, leilão, débitos e multas.",
  alternates: {
    canonical: "https://olhaessecarro.com.br",
  },
  openGraph: {
    type: "website",
    url: "https://olhaessecarro.com.br",
    siteName: "Olha Esse Carro",
    title: "Olha Esse Carro",
    description:
      "Consulte placa e histórico veicular com informações de restrições, sinistros, leilão, débitos e multas.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olha Esse Carro",
    description:
      "Consulte placa e histórico veicular com informações de restrições, sinistros, leilão, débitos e multas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N0JP4GEQVX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-N0JP4GEQVX');`}
        </Script>
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
