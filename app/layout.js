import { Righteous, Sora } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ochayi Peter | Frontend Developer",
  description: "Ochayi Peter's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${righteous.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
