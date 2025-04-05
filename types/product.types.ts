type Rating = {
  rate: number;
  count: number;
};

export type TProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
