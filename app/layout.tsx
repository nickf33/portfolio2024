import type { Metadata } from "next";
import "@/styles/index.scss";
import NavigationWrap from "@/components/layout/navs/NavigationWrap";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/layout/Cursor";
import Background from "@/components/layout/Background";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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
        <Background />
        <NavigationWrap />
        <main>{children}</main>
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
