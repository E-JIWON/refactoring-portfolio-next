// 옵션 리스트 - 추후에 상품에 따라 옵션이 다른걸로 하고싶음.
export const OPTION_LIST: OptionItem[] = [
  {
    optionCategory: '얼음',
    list: [
      {
        name: '없음',
        icon: '/images/option/ice_none.png',
        price: 0,
      },
      {
        name: '보통',
        icon: '/images/option/ice_nomal.png',
        price: 0,
      },
      {
        name: '적게',
        icon: '/images/option/ice_less.png',
        price: 0,
      },
      {
        name: '많이',
        icon: '/images/option/ice_much.png',
        price: 0,
      },
    ],
  },
  {
    optionCategory: '샷',
    list: [
      {
        name: '기본',
        icon: '/images/option/shot_nomal.png',
        price: 0,
      },
      {
        name: '+1 샷',
        icon: '/images/option/shot_plus_1.png',
        price: 500,
      },
      {
        name: '+2 샷',
        icon: '/images/option/shot_plus_2.png',
        price: 1000,
      },
      {
        name: '+3 샷',
        icon: '/images/option/shot_plus_3.png',
        price: 1500,
      },
    ],
  },
  {
    optionCategory: '시럽',
    list: [
      {
        name: '없음',
        price: 0,
      },
      {
        name: '라이트',
        price: 0,
      },
      {
        name: '일반',
        price: 0,
      },
      {
        name: '추가',
        price: 500,
      },
    ],
  },
  {
    optionCategory: '우유',
    list: [
      {
        name: '일반',
        price: 0,
      },
      {
        name: '저지방',
        price: 500,
      },
      {
        name: '무지방',
        price: 500,
      },
      {
        name: '두유',
        price: 1500,
      },
    ],
  },
  {
    optionCategory: '휘핑',
    list: [
      {
        name: '없음',
        icon: '/images/option/whipping_none.png',
        price: 0,
      },
      {
        name: '적게',
        icon: '/images/option/whipping_less.png',
        price: 0,
      },
      {
        name: '일반',
        icon: '/images/option/whipping_nomal.png',
        price: 0,
      },
      {
        name: '많이',
        icon: '/images/option/whipping_much.png',
        price: 500,
      },
    ],
  },
];
