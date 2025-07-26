import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";


export const metadata = {
  title: "Blind Box Simulator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/5thAvenue.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/YujiSyuku-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="bg-[url('/images/paper-bg.png')] bg-cover bg-center h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
