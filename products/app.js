import { item } from './products.js';
import { createShopLi } from '../utilis.js';

console.log(item);

const ul = document.querySelector('#products');

console.log(ul, 'products');

for (let oneitem of item){
    const li = createShopLi(oneitem);
    ul.append(li);
}