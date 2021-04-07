/* eslint-disable no-unused-vars */
// import { item } from './products.js';

import { addItemToShop, findById } from './localStorage.js';

export function createShopLi(item) {
    const li = document.createElement('li');

    li.classList.add('item');
    li.style.background = item.color;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = item.name;

    const pType = document.createElement('p');

    pType.classList.add('type');
    pType.textContent = item.type;

    const pSize = document.createElement('p');

    pSize.textContent = item.size;

    const image = document.createElement('img');

    image.src = item.image;

    const pAlignment = document.createElement('p');

    pAlignment.textContent = item.alignment;

    const pEvolve = document.createElement('p');

    pEvolve.textContent = item.canDigivolve ? 'Can digivolve' : 'This is the final form';

    const pPrice = document.createElement('p');

    pPrice.textContent = item.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); 
    const button = document.createElement('button');

    button.textContent = 'Add to digicart';

    button.addEventListener('click', () => {
        addItemToShop(item.id);
    });

    li.append(pName, pType, pSize, image, pAlignment,pEvolve, pPrice, button);

    return li;
}
export function createTableRow(someCartItem, someitem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = someitem.name;
    tdQuantity.textContent = someCartItem.quantity;
    const total = someitem.price * someCartItem.quantity;


    // const totalAsUSD = `$${total}.00`;
    const config = {
        currency: 'USD',
        style: 'currency'
    };

    const totalAsUSD = total.toLocaleString('en-US', config);

    tdPrice.textContent = totalAsUSD;

    tr.append(tdName, tdQuantity, tdPrice);
    
    return tr;
}
export function craeteTotalRow(cartItem, someShop){
    let sum = 0;

    for (let item of cartItem) {
        const mathing = findById(someShop, cartItem.id);
        console.log(matching);
        const lineitem = mathing.price * cartItem.quantity;
        sum = sum + lineitem;
    }

    const tr = document.createElement('td');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    const td3 = document.createElement('td');
    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);
    return tr;
}