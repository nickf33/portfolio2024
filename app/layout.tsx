import type { Metadata } from "next";
// import "@/styles/index.scss";
import "@/app/styles/index.scss";
import NavigationWrap from "@/app/components/layout/navs/NavigationWrap";
import Footer from "@/app/components/layout/Footer";
import Cursor from "@/app/components/layout/Cursor";
import Background from "./components/layout/background";

export const metadata: Metadata = {
  title: "Nick Feltham Portfolio 2024",
  description: "Open University Graduate Portfolio 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Background /> */}
        <NavigationWrap />
        <main className="relative min-h-screen">
          {children}
          <Footer />
        </main>
        <Cursor />
      </body>
    </html>
  );
}
