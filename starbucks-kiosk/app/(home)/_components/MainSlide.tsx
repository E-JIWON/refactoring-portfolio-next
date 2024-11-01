import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const MainSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드
  const [nextSlide, setNextSlide] = useState(1); // 다음 슬라이드
  const [isSliding, setIsSliding] = useState(false); // 슬라이딩 여부

  const slides = [
    {
      id: 1,
      image: '/images/slide/slide1.png',
      desc: '헤이즐럿 라떼 프로모션 진행 중 소개 이미지',
      bgColor: '#91c6b4',
    },
    {
      id: 2,
      image: '/images/slide/slide2.png',
      desc: '진한 초콜릿 크림 롤, 부드러운 티라미스 룰 소개 이미지',
      bgColor: '#9db79e',
    },
    {
      id: 3,
      image: '/images/slide/slide3.png',
      desc: '스타벅스만의 유니크한 텀블러 소개 이미지',
      bgColor: '#bfd4d9',
    },
    {
      id: 4,
      image: '/images/slide/slide4.png',
      desc: '신규 스페셜 라떼 출시 소개 이미지',
      bgColor: '#1e2222',
    },
  ];

  // 자동 슬라이드 효과
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIsSliding(true);
      setNextSlide((currentSlide + 1) % slides.length);

      setTimeout(() => {
        setCurrentSlide((currentSlide + 1) % slides.length); // 현재 슬라이드 업데이트
        setNextSlide((currentSlide + 2) % slides.length); // 다음 슬라이드 업데이트
        setIsSliding(false);
      }, 1400);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [currentSlide, slides.length]);

  return (
    <div
      className={`relative h-full transition-[filter] delay-500 duration-500 ${isSliding ? 'grayscale' : ''}`}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{ backgroundColor: slide.bgColor }}
          className={`absolute h-full w-full`}>
          {/* 높이 트랜지션을 위한 컨테이너 */}
          <div
            className={`relative w-full overflow-hidden transition-[height] duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${index === nextSlide ? 'z-20 h-full' : index === currentSlide ? 'z-10 h-full' : 'z-0 h-0'}`}>
            {/* 이미지 컨테이너 */}
            <div className='relative h-full w-full'>
              <Image
                src={slide.image}
                alt={slide.desc}
                fill
                priority
                className='object-cover object-top'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSlide;
