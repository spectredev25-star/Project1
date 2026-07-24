import type { Metadata } from "next";

import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/Provider/theme-provider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight:['600','700'],
  variable:"--font-poppins",
});


export const metadata: Metadata = {
  title: "BLUEPRINT",
  description: "Scholarship Matcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>
      <body className= {`${inter.variable} ${poppins.variable} antialiased min-h-full min-w-fit`}>
        <ThemeProvider>
           {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
