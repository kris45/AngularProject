export interface Brand {
  id: number;
  name: string;
  amount: number;
  bestSeller: string;
  description: string;
}

export interface BrandList {
  brandsList: Brand[],
}
