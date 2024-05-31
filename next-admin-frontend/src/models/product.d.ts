interface IProduct {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  price: number;
  slug: string;
  image: string;
  media_image: string;
  images?: IImage[];
}
