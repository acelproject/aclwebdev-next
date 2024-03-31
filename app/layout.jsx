"use client";

import {  Outfit } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

// componnents
import Header from "./../components/Header";
import Footer from "./../components/Footer";
// themes provider
import { ThemeProvider } from "./../components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
