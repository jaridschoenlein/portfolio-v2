import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google"; 
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "Jarid Schoenlein - Design Engineer",
  description: "Design Engineer at the intersection of design and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSerif.className}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
