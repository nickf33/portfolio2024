import type { Metadata } from "next";
// import "@/styles/index.scss";
import "@/app/styles/index.scss";
import NavigationWrap from "@/app/_components/layout/navs/NavigationWrap";
import Footer from "@/app/_components/layout/Footer";
import Cursor from "@/app/_components/layout/Cursor";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Nick Feltham Portfolio 2024",
  description: "Open University Graduate Portfolio 2024",
};

export const viewport = {
  width: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <NavigationWrap />
        <Suspense fallback={<Loading />}>
          <main className="relative min-h-screen">
            {children}
            <Footer />
          </main>
        </Suspense>
      </body>
    </html>
  );
}
