import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StateProvider } from "@/providers/StateProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bible Timeline",
  description: "jw.org - Jehovah’s Witnesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
}
