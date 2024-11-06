import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='flex h-24 items-center justify-between px-14'>
        {/* 스타벅스 아이콘 */}
        <button className=''>
          <Image
            src={'/images/icon/home.svg'}
            alt='홈으로 돌아가는 홈모양 버튼'
            width={38}
            height={38}
          />
        </button>
        {/* 스타벅스 로고 */}
        <div>
          <Image
            src={'/images/layout/header_starbucks.png'}
            alt='스타벅스 로고'
            width={420}
            height={90}
          />
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <Image
              src={'/images/icon/restore.svg'}
              alt='진행 리셋 시간'
              width={38}
              height={38}
            />
          </div>
          <div className='h-full'>0초</div>
        </div>
      </header>
      <div className='flex-1'>{children}</div>
    </>
  );
}
