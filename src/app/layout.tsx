import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/swiper.css";
import { Providers } from "@/lib/Providers";
import { Toaster } from "react-hot-toast";
import { Footer, Navbar, ScrollToTopButton } from "@/components/common";



export const metadata: Metadata = {
  title: 'فروشگاه ابوتراب - صفحه اصلی',
  description: 'فروشگاه ابوتراب، ارائه دهنده بهترین محصولات',
  keywords: 'فروشگاه، خرید، محصولات',
};

const BYekan = localFont({
  src: [
    { path: "./fonts/BYekan+.ttf", weight: "400", style: "normal" },
    { path: "./fonts/BYekan+ Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-BYekan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${BYekan.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background" suppressHydrationWarning>
        <div className="min-h-screen flex flex-col container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <Navbar />
          <main className="flex-grow">
            <Providers>{children}</Providers>
          </main>

          <Footer />

          <ScrollToTopButton />

          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
                fontFamily: 'var(--font-BYekan)',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </body>
    </html>
  )
}
