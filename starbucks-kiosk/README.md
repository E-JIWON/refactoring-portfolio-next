# ☕ Starbucks Kiosk

### vercel 배포 링크

- https://starbucks-kiosk-umber.vercel.app/

### 📌 프로젝트 소개

이 프로젝트는 2021년 학원 시절 포트폴리오를 Next.js와 TypeScript를 사용하여
리팩토링 한 프로젝트입니다.

### 🛠 기술 스택

- Frontend

  - Next.js 14
  - TypeScript
  - TailwindCSS
  - Zustand
  - React-Query

- Backend
  - Firebase

### 🗂 폴더 구조

```bash
about-me
│
├── 📂 app/
│   ├── 📂 _api/                            # 공통 API
│   │   ├── 🗒️ test.ts                      # ex: 사용자 데이터 호출 등
│   ├─── 📂 _api/                            # 공통 API
│   │   ├─── 🗒️test.ts                      # ex: 사용자 데이터 호출 등
----------------------------------------------------------------------------------
│   ├─── 📂 _constants/                      # 전역에서 사용되는 상수 값
----------------------------------------------------------------------------------
│   ├─── 📂 _hooks/                          # 공통 커스텀 훅
│   │   ├─── 🗒️useTest.ts
│   │   └─── 🗒️useTesT.ts
----------------------------------------------------------------------------------
│   ├─── 📂 _lib/                            # 라이브러리
│   │   ├── 📂 firebase/                     # 공통 컴포넌트 (Button, Modal 등)
│   │   │   ├─── 🗒️ config.ts                # 설명 추가 필요
│   │   │   ├─── 🗒️ addDocument.ts           # menu_list document 전체 등록 함수
│   │   │   └─── 🗒️ resetDocument.ts         # menu_list document 전체 리셋 함수
----------------------------------------------------------------------------------
│   ├─── 📂 _mock/                           # DB에 등록할 데이터
│   │    └─── 🗒️ menuItems.ts                # "menu_list"에 등록할 데이터들
----------------------------------------------------------------------------------
│   ├─── 📂 _context/                        #  context API
│   │   ├── 📂 order/                        #
│   │   │   └─── 🗒️ OrderContext.ts          # 포장/매장 여부를 들고있는 놈
│   │   ├── 📂 theme/                        # 테마 provider
│   │   │ ├─── 🗒️ ThemeDetector.ts
│   │   │ └─── 🗒️ ThemeProvider.ts           # menu_list document 전체 리셋 함수
----------------------------------------------------------------------------------
│   ├─── 📂 _store/                          # 전역 상태 (zustand)
│   │    └─── 🗒️ themeStore.ts               # 테마의 전역 상태를 가지고 있음
----------------------------------------------------------------------------------
│   ├─── 📂 _types/                          # 타입 정의
│   │    ├─── 🗒️ menuItems.ts                # menuItems.ts에 사용하는 menu list type
│   │    └─── 🗒️ ThemeType.ts                # 테마 타입
----------------------------------------------------------------------------------
│   ├─── 📂 _ui/                             # UI 관련 요소 모음
│   │   ├── 📂components/                    # 공통 컴포넌트 (Button, Modal 등)
│   │   │   ├─── 📂button/
│   │   │   │   ├── 🗒️Button.tsx             # 공통으로 사용되는 기본 Button
│   │   │   │   └── 🗒️LoginButton.tsx        # 로그인 버튼
│   │   │   └─── 📂modal/
│   │   │   │   ├── 🗒️Alert.tsx              # 알럿
│   │   │   │   └── 🗒️Confirm.tsx            # 컨펌
│   │   ├─── 📂styles/                      # 스타일 관리
│   │   │   └── 🗒️global.css                # 전역 스타일
----------------------------------------------------------------------------------
│   ├─── 📂 _utils/                          # 유틸리티 함수 모음
│   │    └─── 🗒️ helpers.ts                   # 다양한 유틸 함수
----------------------------------------------------------------------------------
│   ├─── 📂 (home)/                          # 메인 페이지
│   │   ├── 📂 components/                   # 메인 페이지에서만 사용되는 컴포넌트
│   │   │   └─── 🗒️ ManagerComponent.tsx
│   │   └─── 🗒️page.tsx/
│   ├─── 📂(pages)/                          # 페이지들
|   │   └─── 📂 menu/                        # 메뉴 페이지
|   |   │   └─── 📂 api/                     # 메뉴 페이지에서 사용되는 api 모음
|   │   │   │   └─── 🗒️ route.ts
│   └── 🗒️layout.tsx                         # 공통 레이아웃 설정
----------------------------------------------------------------------------------
└─── 📂public/                              # 정적 파일 (이미지, 아이콘 등)
     ├─── 📂images/
     └─── 📂fonts/ㄴ
```

### ⚙️ 개발 환경 설정

```
{
  "printWidth": 100, // 한 줄 길이
  "useTabs": false, // 탭 대신 스페이스
  "tabWidth": 2, // 들여쓰기 2칸
  "singleQuote": true, // 문자열에 작은 따옴표
  "jsxSingleQuote": true, // jsx 속성에도 작은 따옴표
  "singleAttributePerLine": true, // jsx 속성을 한 줄에 하나씩
  "bracketSameLine": true, // 여는 괄호를 같은 줄 위치
  "bracketSpacing": true, // 객체 리터럴 중괄호 주변에 공백 추가 {jiwon: true} => { jiwon: true }
  "trailingComma": "es5", // 문장 끝에 쉼표 es5 규칙에 따름
  "semi": true, // 문장 끝에 세미콜론 추가
  "plugins": ["prettier-plugin-tailwindcss"], // tailwind 자동 정렬을 위한 플러그인
  "tailwindConfig": "./tailwind.config.ts"
}

```

### 👨‍💻 실행 방법

```bash
# Install dependencies
yarn

# Run development server
yarn dev
```

### 📦 주요 기능

[내용 추가 예정]

### 🔥 트러블 슈팅

[진행하면서 발생하는 이슈들 추가 예정]

### 📊 성능 최적화

[추가 예정]
최적화 전/후 비교
Lighthouse 점수
Core Web Vitals 지표

### 🎨 UI/UX 개선

[추가 예정]
개선 전/후 비교

### 📝 회고

[추가 예정]
프로젝트를 통해 배운 점
아쉬운 점 & 개선하고 싶은 점
향후 발전 방향

### ✨ More Info

[개인 블로그 링크](https://velog.io/@meowoof/posts)
