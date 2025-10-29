import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ibnu Al Yazzar • Frontend Developer",
  description:
    "Portofolio pribadi Muhammad Ibnu Al Yazzar — seorang Frontend Developer yang berfokus pada pembuatan antarmuka web modern, responsif, dan berkualitas tinggi menggunakan Next.js, TypeScript, dan Tailwind CSS.",
  keywords: [
    "Muhammad Ibnu Al Yazzar",
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Portofolio",
  ],
  authors: [{ name: "Muhammad Ibnu Al Yazzar" }],
  creator: "Muhammad Ibnu Al Yazzar",
  openGraph: {
    title: "Muhammad Ibnu Al Yazzar • Frontend Developer",
    description:
      "Lihat portofolio Muhammad Ibnu Al Yazzar, Frontend Developer yang membangun aplikasi web modern dengan Next.js dan TypeScript.",
    // url: "https://ibnualyazzar.dev", // ganti sesuai domain kamu nanti
    siteName: "Muhammad Ibnu Al Yazzar Portfolio",
    // images: [
    //   {
    //     url: "/og-image.png", // nanti bisa kamu buat satu banner portofolio
    //     width: 1200,
    //     height: 630,
    //     alt: "Muhammad Ibnu Al Yazzar Portfolio",
    //   },
    // ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>  
      </body>
    </html>
  );
}
