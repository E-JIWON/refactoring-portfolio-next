interface OptionItem {
  optionCategory: string;
  list: {
    name: string;
    price: number;
    icon?: string;
  }[];
}
