import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Ajay V | Frontend Developer",
  description: "Portfolio of Ajay V, a passionate Frontend Developer building modern, scalable web applications with React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen redEyeMouse`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
