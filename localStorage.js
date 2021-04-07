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

