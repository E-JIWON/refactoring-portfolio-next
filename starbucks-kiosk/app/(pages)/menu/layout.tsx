export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='h-8'>
        {/* 스타벅스 아이콘 */}
        <div>스타벅스 아이콘</div>
        <div></div>
      </header>
      <>{children}</>
    </>
  );
}
