import type { Metadata } from "next";
import { Inter, Playfair_Display, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReaderSettings } from "@/components/ReaderSettings";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Levant Review — Northern Cyprus, in depth",
  description:
    "Slow journalism from Northern Cyprus (KKTC): real estate, culture, and the environment along the divided island's quietest coastlines.",
};

// Set the stored theme before paint to prevent a flash of the default palette.
const themeBootstrap = `(function(){try{var t=localStorage.getItem('kktc-news-theme');if(t==='paper'||t==='sepia'||t==='ink'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="paper"
      className={`${inter.variable} ${playfair.variable} ${sourceSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          <ReaderSettings />
        </ThemeProvider>
      </body>
    </html>
  );
}
