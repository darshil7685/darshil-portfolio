import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Darsil Pansuriya - Back-End Developer",
  description: "Experienced Node.js Developer with over 3.5+ years of expertise in designing, developing, and maintaining scalable back-end systems and RESTful APIs.",
  keywords: ["Node.js", "Back-End Development", "Express.js", "RESTful APIs", "JavaScript", "Developer"],
  authors: [{ name: "Darsil Pansuriya" }],
  openGraph: {
    title: "Darsil Pansuriya - Back-End Developer",
    description: "Experienced Node.js Developer with over 3.5+ years of expertise in designing, developing, and maintaining scalable back-end systems and RESTful APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
