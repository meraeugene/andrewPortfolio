import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header";
import { Providers } from "@/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew's Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    images:
      "https://raw.githubusercontent.com/meraeugene/andrewPortfolio/main/public/images/preview.png",
  },
  // images: [
  //   {
  //     url: "https://raw.githubusercontent.com/meraeugene/andrewPortfolio/main/public/images/preview.png",
  //     width: 1607,
  //     height: 907,
  //   },
  // ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
