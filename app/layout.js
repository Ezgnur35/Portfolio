import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/LangContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Ezginur Ünver — Portfolio",
  description: "Junior Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof history!=="undefined"){history.scrollRestoration="manual";}if(typeof window!=="undefined"){window.scrollTo(0,0);}`,
          }}
        />
      </head>
      <body className={dmSans.className}>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
