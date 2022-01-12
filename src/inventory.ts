import { calcAverageProductPrice, Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

const inventory2: InventoryItem[] = []

export function calcInventoryValue(inventory:InventoryItem[]):number{
    let result: number = 0;
    inventory.forEach(item => result += item.product.price * item.quantity)
    result = parseFloat((result).toFixed(2))|| 0;
    return result
}

console.log(calcInventoryValue(inventory))
console.log(calcInventoryValue(inventory2))