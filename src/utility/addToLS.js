const getStoredCartList = () => {
    const cartListStr = localStorage.getItem('cart-list')
    if(cartListStr){
        const storedList =  JSON.parse(cartListStr)
        return storedList
    }
    else{
        return [];
    }
}

const addStoredCartList = (id) => {
    const storedList = getStoredCartList()
    if(storedList.includes(id)){
        alert('Alrady Added')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list',storedListStr)
    }
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        alert('Alrady Added')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}


export {addStoredCartList,getStoredCartList,addToStoredWishList,getStoredWishList}