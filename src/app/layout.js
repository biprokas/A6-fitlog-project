import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import ItemsProvider from "@/context/ItemsContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "FitLog",
  description: "Track your workouts and build better habits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <ItemsProvider>
          <Navbar />

          {children}

          <h2>this is footer</h2>
        </ItemsProvider>
      </body>
    </html>
  );
}
