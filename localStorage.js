const SHOP = 'SHOP';

export function getShop(){
    const stringyShop = localStorage.getItem(SHOP);
    const parsedShop = JSON.parse(stringyShop);

    if (parsedShop){
        return parsedShop;
    } else {
        return [];
    }
}

export function setShop(parsedShop){
    const stringyShop = JSON.stringify(parsedShop);
    localStorage.setItem(SHOP, stringyShop);
}

export function findById(array, someId){
    for (let item of array){
        if (item.id === someId){
            return item;
        }
    }
}

export function addItemToShop(shopId){
    const shop = getShop();

    const match = findById(shop, shopId);
    if (match){
        match.quantity++;
    } else { 
        const item = {
            id: shopId,
            quantity: 1
        };
        shop.push(item);
    }
    setShop(shop);
}