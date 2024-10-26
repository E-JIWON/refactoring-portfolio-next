import type { Metadata } from 'next';
import '@/_ui/styles/globals.css';
import { Gowun_Batang } from 'next/font/google';
import ManagerComponent from './_ui/components/layout/ManagerComponent';

import { OrderProvider } from './_context/OrderContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './_provider/ThemeProvider';
import ReactQueryProvider from './_provider/ReactQueryProvider';

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
    <html lang='ko'>
      <body className={`${gowunBatangFont.className} antialiased`}>
        <ThemeProvider>
          <OrderProvider>
            <ReactQueryProvider>
              <div className='mx-auto flex h-screen w-[900px] py-5'>
                <div className='grid h-full w-full grid-rows-[auto_1fr]'>
                  <ManagerComponent />
                  <main className='bg-light-green-deep text-light-white-light'>{children}</main>
                </div>
              </div>
            </ReactQueryProvider>
          </OrderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
