import type { Metadata } from "next";
import "./globals.css";
import DynamicNavbar from "@/components/DynamicNavbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import MouseSilhouette from "@/components/MouseSilhouette";

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
      <body className="antialiased">
        <LanguageProvider>
          <DynamicNavbar />
          {children}
          <Footer />
          <MouseSilhouette />
        </LanguageProvider>
      </body>
    </html>
  );
}
