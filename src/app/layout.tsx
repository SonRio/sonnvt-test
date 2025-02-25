import "./globals.css";
import "animate.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Montserrat, Playfair_Display } from "next/font/google";
import { ContextProvider } from "@/context";
import "aos/dist/aos.css"; // You can also use <link> for styles
import StyledComponentsRegistry from "@/libs/styled-component-registry";
import ClientLayout from "@/libs/client-layout";

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
        <title>Hi, I am Son</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="icon"
          href="/assets/images/header/logo-home.svg"
          type="image/40"
          sizes="40"
        />
      </head>
      <body
        className={`${montserrat.className} ${playfair_Display.className} antialiased`}
      >
        <ContextProvider>
          <StyledComponentsRegistry>
            <ClientLayout>
              <Header />
              {children}
              <Footer />
            </ClientLayout>
          </StyledComponentsRegistry>
        </ContextProvider>
      </body>
    </html>
  );
}
