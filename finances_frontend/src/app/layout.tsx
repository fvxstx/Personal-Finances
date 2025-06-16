import type { Metadata } from "next";
import { Nunito, Uncial_Antiqua } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/ui/sessionProvider";
import { ToastContainer } from "react-toastify";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const unicalAntiqua = Uncial_Antiqua({
  variable: "--font-uncial-antiqua",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Minhas Finanças",
  description: "Gerencie suas finanças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${unicalAntiqua.variable} antialiased`}
      >
        <SessionProvider>
          {children}
          <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
