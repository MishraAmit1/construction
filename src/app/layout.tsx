import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "A&TInfrastructure Group",
  description: "Pioneering India's infrastructure growth with robust and sustainable road construction solutions.",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main className="min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
