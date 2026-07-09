import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manjeet Lodha — Student Developer",
  description:
    "Portfolio of Manjeet Lodha — a B.Tech student at Newton School of Technology focused on full stack development, backend systems, and building real-world projects.",
  keywords: [
    "Manjeet Lodha",
    "Student Developer",
    "Full Stack Developer",
    "Portfolio",
    "NST",
    "Newton School of Technology",
  ],
  openGraph: {
    title: "Manjeet Lodha — Student Developer",
    description:
      "Student developer building projects, learning continuously, and turning ideas into products through code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
