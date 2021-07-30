export class ProductModel {
  id: string;
  image: string;
  title: string;
  price: string;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  }
}
