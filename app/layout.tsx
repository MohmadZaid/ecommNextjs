import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/Navbar";
import "./globals.css";

const poppo = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Ecommerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppo.className} text-slate-700`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
