console.log('heu');
import { findById, getShop} from '../localStorage.js';
import { item } from '../products/products.js';
import { createTableRow } from '../utilis.js';


const button = document.getElementById('submit');

const shop = getShop();

const table = document.querySelector('table');
for (let oneItem of item){

    const match = findById(item, oneItem.id);
    const tr = createTableRow(oneItem, match);

    table.append(tr);
    console.log(match,'match' ,tr);
}

console.log(item, shop);

button.addEventListener('click', () =>{
    const cart = getShop();

    alert(JSON.stringify(cart));

    localStorage.clear();
    
    window.location = '/';
});