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