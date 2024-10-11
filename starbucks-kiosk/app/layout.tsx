import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./_module/provider/(theme)/ThemeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>
        <ThemeProvider>
          <div className="bg-white text-black dark:bg-blue-950 dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}