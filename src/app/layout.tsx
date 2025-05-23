import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicNavbar from "@/components/DynamicNavbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memory Bears | Preserving Memories Through Handcrafted Teddy Bears",
  description: "Memory Bears transforms cherished clothing into beautiful, handcrafted teddy bears to preserve memories of your loved ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <DynamicNavbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
