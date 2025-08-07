import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Navigation from "@/navigation/Navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import Home from "@/components/home/Home";
import Providers from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Movie store",
    template: `%s | Movie store`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <div className="container">
            <Navigation />
            <div className="center">{children}</div>
            <Sidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
