import "./globals.css";
import "animate.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Montserrat, Playfair_Display } from "next/font/google";
import { ContextProvider } from "@/context";
import "aos/dist/aos.css"; // You can also use <link> for styles

const montserrat = Montserrat({
  subsets: ["latin"],
});

const playfair_Display = Playfair_Display({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Hi, I'm Son</title>
      </head>
      <body
        className={`${montserrat.className} ${playfair_Display.className} antialiased`}
      >
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
