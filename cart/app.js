console.log('heu');
import { findById, getShop} from '../localStorage.js';
import { item } from '../products/products.js';
import { createTableRow } from '../utilis.js';


const button = document.getElementById('submit');

const shop = getShop();
console.log(shop, 'shop');

const table = document.querySelector('table');
for (let oneItem of item){

    const match = findById(item, oneItem.id);
    const tr = createTableRow(oneItem, match);
    // tr.textContent = oneItem.quantiy;
    table.append(tr);
console.log(match, 'match');
}

console.log(item, shop);

button.addEventListener('click', () =>{
    const cart = getShop();
console.log(cart ,'cart');
    alert(JSON.stringify(cart));

    localStorage.clear();
    
    window.location = '/';
});