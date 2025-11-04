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
    "A web developer who enjoys building clean, fast, and user-friendly websites. I work mostly with Next.js, TypeScript, and Tailwind CSS, focusing on creating interfaces that feel smooth and intuitive. I like learning new things, experimenting with different UI ideas, and making sure every project I build looks and feels right.",
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
    url: "https://ibnu-folio.vercel.app",
    siteName: "Muhammad Ibnu Al Yazzar Portfolio",
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
