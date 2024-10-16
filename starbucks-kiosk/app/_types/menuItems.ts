export type MenuItem = {
   id: string; // 고유 아이디
   data: {
      category: string; // 카테고리
      price: number; // 가격
      productName: string; // 아이템 이름
      imgSrc: string; // 이미지 src
   };
};
