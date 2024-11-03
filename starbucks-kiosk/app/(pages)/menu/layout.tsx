import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='h-8'>
        {/* 스타벅스 아이콘 */}
        <div>
          <Image
            src={'/images/icon/home.svg'}
            alt='홈으로 돌아가는 홈모양 버튼'
            width={24}
            height={24}
          />
        </div>
        <div></div>
      </header>
      <div className='flex-1'>{children}</div>
    </>
  );
}
