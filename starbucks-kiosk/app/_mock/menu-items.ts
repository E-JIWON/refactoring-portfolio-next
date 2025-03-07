import { MenuItemMock } from '@/_types/menu';

export const menuItems: MenuItemMock[] = [
  // season
  {
    id: 's_apple_tea',
    data: {
      category: 'season',
      price: 3400,
      productName: '애플 티',
      imgSrc: 'apple_tea.jpg',
    },
  },
  {
    id: 's_apple_tea_i',
    data: {
      category: 'season',
      price: 3400,
      productName: '애플 티',
      imgSrc: 'apple_tea_i.jpg',
    },
  },
  {
    id: 's_black_glazed',
    data: {
      category: 'season',
      price: 5800,
      productName: '블랙 글레이즈드(hot)',
      imgSrc: 'black_glazed.jpeg',
    },
  },
  {
    id: 's_black_glazed_i',
    data: {
      category: 'season',
      price: 5800,
      productName: '블랙 글레이즈드(ice)',
      imgSrc: 'black_glazed_i.jpeg',
    },
  },
  {
    id: 's_green_cream',
    data: {
      category: 'season',
      price: 5800,
      productName: '녹차 크림 라떼',
      imgSrc: 'green_cream.jpg',
    },
  },
  // coffee
  {
    id: 'c_americano',
    data: {
      category: 'coffee',
      price: 2000,
      productName: '아메리카노(hot)',
      imgSrc: 'americano.jpeg',
    },
  },
  {
    id: 'c_americano_i',
    data: {
      category: 'coffee',
      price: 2200,
      productName: '아메리카노(ice)',
      imgSrc: 'americano_i.jpeg',
    },
  },
  {
    id: 'c_cappuccino',
    data: {
      category: 'coffee',
      price: 3200,
      productName: '카푸치노(hot)',
      imgSrc: 'cappuccino.jpeg',
    },
  },
  {
    id: 'c_cappuccino_i',
    data: {
      category: 'coffee',
      price: 3200,
      productName: '카푸치노(hot)',
      imgSrc: 'cappuccino_i.jpeg',
    },
  },
  {
    id: 'c_caramel',
    data: {
      category: 'coffee',
      price: 3600,
      productName: '카라멜 라떼(hot)',
      imgSrc: 'caramel.jpeg',
    },
  },
  {
    id: 'c_caramel_i',
    data: {
      category: 'coffee',
      price: 3600,
      productName: '카라멜 라떼(ice)',
      imgSrc: 'caramel_i.jpeg',
    },
  },
  {
    id: 'c_dolce',
    data: {
      category: 'coffee',
      price: 5200,
      productName: '돌체 라떼(hot)',
      imgSrc: 'dolce.jpeg',
    },
  },
  {
    id: 'c_dolce_i',
    data: {
      category: 'coffee',
      price: 5200,
      productName: '돌체 라떼(ice)',
      imgSrc: 'dolce_i.jpeg',
    },
  },
  {
    id: 'c_dolce_coldbrew_i',
    data: {
      category: 'coffee',
      price: 5200,
      productName: '돌체 콜드브루(ice)',
      imgSrc: 'dolce_coldbrew_i.jpeg',
    },
  },
  {
    id: 'c_double_shot',
    data: {
      category: 'coffee',
      price: 5200,
      productName: '더블 샷(hot)',
      imgSrc: 'double_shot.jpeg',
    },
  },
  {
    id: 'c_esso',
    data: {
      category: 'coffee',
      price: 1800,
      productName: '에스프레소',
      imgSrc: 'esso.jpeg',
    },
  },
  {
    id: 'c_latte',
    data: {
      category: 'coffee',
      price: 1800,
      productName: '카페 라떼',
      imgSrc: 'latte.jpeg',
    },
  },
  {
    id: 'c_moca',
    data: {
      category: 'coffee',
      price: 1800,
      productName: '카페 모카(hot)',
      imgSrc: 'moca.jpeg',
    },
  },
  {
    id: 'c_moca_i',
    data: {
      category: 'coffee',
      price: 1800,
      productName: '카페 모카(ice)',
      imgSrc: 'moca_i.jpeg',
    },
  },
  {
    id: 'c_nitro_coldbrew',
    data: {
      category: 'coffee',
      price: 1800,
      productName: '나이트로 콜드브루',
      imgSrc: 'nitro_coldbrew.jpeg',
    },
  },
  {
    id: 'c_nitro_vanilla',
    data: {
      category: 'coffee',
      price: 1800,
      productName: '나이트로 바닐라',
      imgSrc: 'nitro_vanilla.jpeg',
    },
  },
  // frappuccino
  {
    id: 'f_caramel',
    data: {
      category: 'frappuccino',
      price: 4600,
      productName: '카라멜 프라푸치노',
      imgSrc: 'caramel_F.jpg',
    },
  },
  {
    id: 'f_choco',
    data: {
      category: 'frappuccino',
      price: 4600,
      productName: '초코 프라푸치노',
      imgSrc: 'choco_F.jpg',
    },
  },
  {
    id: 'f_double_esso',
    data: {
      category: 'frappuccino',
      price: 6300,
      productName: '더블 프라푸치노',
      imgSrc: 'double_esso_F.jpg',
    },
  },
  {
    id: 'f_esso',
    data: {
      category: 'frappuccino',
      price: 6000,
      productName: '에스프레소 프라푸치노',
      imgSrc: 'esso_F.jpg',
    },
  },
  {
    id: 'f_greentea',
    data: {
      category: 'frappuccino',
      price: 6000,
      productName: '녹차 프라푸치노',
      imgSrc: 'greentea_F.jpg',
    },
  },
  //tea
  {
    id: 't_chamo',
    data: {
      category: 'tea',
      price: 2800,
      productName: '카모마일 티(hot)',
      imgSrc: 'chamo.jpg',
    },
  },
  {
    id: 't_chamo_i',
    data: {
      category: 'tea',
      price: 2800,
      productName: '카모마일 티(ice)',
      imgSrc: 'chamo_i.jpg',
    },
  },
  {
    id: 't_earl_gray',
    data: {
      category: 'tea',
      price: 2900,
      productName: '얼그레이 티',
      imgSrc: 'earl_gray_T.jpg',
    },
  },
  {
    id: 't_grapefruit',
    data: {
      category: 'tea',
      price: 3500,
      productName: '자몽 티',
      imgSrc: 'grapefruit_T.jpg',
    },
  },
  {
    id: 't_hibi',
    data: {
      category: 'tea',
      price: 2800,
      productName: '히비스커스 티',
      imgSrc: 'hibi_T.jpg',
    },
  },
  // etc
  {
    id: 'e_bagel_chip',
    data: {
      category: 'etc',
      price: 6800,
      productName: '바움쿠헨',
      imgSrc: 'baumkuchen.jpg',
    },
  },
  {
    id: 'e_baumkuchen',
    data: {
      category: 'etc',
      price: 3500,
      productName: '바게트 칩',
      imgSrc: 'bagel_chip.jpg',
    },
  },
  {
    id: 'e_blueberry_cheese',
    data: {
      category: 'etc',
      price: 6900,
      productName: '블루베리 치즈 케이크',
      imgSrc: 'blueberry_cheese.jpg',
    },
  },
  {
    id: 'e_choco_roll',
    data: {
      category: 'etc',
      price: 5700,
      productName: '초코 롤',
      imgSrc: 'choco_roll.png',
    },
  },
  {
    id: 'e_cream_cas',
    data: {
      category: 'etc',
      price: 4500,
      productName: '생크림 카스테라',
      imgSrc: 'cream_cas.jpg',
    },
  },
  {
    id: 'e_heart_pie',
    data: {
      category: 'etc',
      price: 3200,
      productName: '초코 롤',
      imgSrc: 'heart_pie.jpg',
    },
  },
];
