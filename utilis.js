/* eslint-disable no-unused-vars */
// import { item } from './products.js';

import { addItemToShop, findById } from './localStorage.js';

export function createShopLi(item){
    const li = document.createElement('li');
    li.classList.add('shop');
    li.style.background = 'purple';

    const itemName = document.createElement('p');
    itemName.classList.add('shop');
    // itemName.style.background = item.color;
    itemName.textContent = item.name;

    const pType = document.createElement('p');
    pType.classList.add('shop');
    pType.style.background = 'purple';
    pType.textContent = item.type;



    const pSize = document.createElement('p');
    pSize.classList.add('shop');
    pSize.style.background = 'purple';
    pSize.textContent = item.description;

    const img = document.createElement('img');
    img.src = item.image;
    const price = document.createElement('p');
    price.textContent = item.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); 
    const button = document.createElement('button');
    button.textContent = 'buy me';
    button.addEventListener('click', () => {
        addItemToShop(item.id);
    });

    li.append(pType, pSize, img, price, button);

    // console.log(li, itemName, pType, pSize, img, price, button);
    return li;
}

export function createTableRow(cartItem, someShop){
    const tr = document.createElement('tr');
    // name.textContent = cartItem.name;
    const name = document.createElement('td');
    // quantity.textContent = cartItem.quantity;
    const quantity = document.createElement('td');

    const price = document.createElement('td');
    // const total = someShop.price * cartItem.quantity;

    const config = {
        currency: 'USD',
        style: 'currency'
    };

    // const totalAsUSD = total.toLocaleString('en-US', config);
    // price.textContent = totalAsUSD;

    
    
    
    
    console.log(tr, name, quantity);

    tr.append(name, quantity, price);
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