// import { item } from './products.js';

export function createShopLi(item){
    const li = document.createElement('li');
    li.classList.add('shop');
    li.style.background = 'purple';

    const itemName = document.createElement('p');
    itemName.classList.add('shop');
    itemName.style.background = 'purple';
    // itemName.textContent = item.name;

    const pType = document.createElement('p');
    pType.classList.add('shop');
    pType.style.background = 'purple';
    // pType.textContent = item.type;



    const pSize = document.createElement('p');
    pSize.classList.add('shop');
    pSize.style.background = 'purple';
    // pSize.textContent = item.description;

    const img = document.createElement('img');
    // img.src = item.img;
    const price = document.createElement('p');
    // price.textContent = item.price.toLocaleString('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    // }); 
    const button = document.createElement('button');
    // button.addEventListener('click', () => {
    //     addItemToCart(item.id);
    // });

    li.append(pType, pSize, img, price, button);

    console.log(li, itemName, pType, pSize, img, price, button);
    return li;
}