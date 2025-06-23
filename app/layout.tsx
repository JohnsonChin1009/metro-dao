import type { Metadata } from "next";
import { Public_Sans  } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "metroDAO",
  description: "a dapp for crowdfunding public transportation projects in Malaysia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
