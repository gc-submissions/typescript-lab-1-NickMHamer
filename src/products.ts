export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Coffee", price: 3.99 },
  { name: "Tea", price: 2.99 },
  { name: "Sandwich", price: 5.99 },
];

const products2: Product[]= []

export function calcAverageProductPrice(products: Product[]): number {
  let result: number = 0;
  products.forEach((product) => (result += product.price));
  result = parseFloat((result / products.length).toFixed(2))|| 0;
  return result;
}
calcAverageProductPrice(products)
calcAverageProductPrice(products2);
