import { item } from './products.js';
import { createShopLi } from '../utilis.js';

console.log(item);

const ul = document.querySelector('#products');



for (let oneitem of item){
    const li = createShopLi(oneitem);
    ul.append(li);
    console.log(ul, 'products', oneitem, 'hey');
}