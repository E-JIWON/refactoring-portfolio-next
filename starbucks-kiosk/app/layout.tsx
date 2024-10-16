import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/_ui/provider/(theme)/ThemeProvider';
import { Gowun_Batang } from 'next/font/google';

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
               <div className="w-[700px] h-[900px] mx-auto bg-light-green-500 text-light-white-500">
                  {children}
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
