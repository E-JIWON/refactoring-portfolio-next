import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/_ui/provider/(theme)/ThemeProvider';
import { Gowun_Batang } from 'next/font/google';
import ManagerComponent from './(home)/_compoents/ManagerComponent';
import Link from 'next/link';

const gowunBatangFont = Gowun_Batang({
   subsets: ['latin'],
   weight: ['400', '700'],
   display: 'swap',
});

export const metadata: Metadata = {
   title: {
      template: 'starbucks | %s',
      default: 'starbucks',
   },
   description: 'hi jiwon starbucks app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ko">
         <body className={`${gowunBatangFont.className} antialiased`}>
            <ThemeProvider>
               <div className="mt-4 w-[900px] h-[1200px] mx-auto flex">
                  <div className="w-full h-full grid grid-rows-[auto_1fr]">
                     <ManagerComponent />
                     <main className=" bg-light-green-deep text-light-white-light">
                        {children}
                     </main>
                  </div>
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
