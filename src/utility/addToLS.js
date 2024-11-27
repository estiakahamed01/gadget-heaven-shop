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


// const getStoredWishList = () => {
//     const cartListStr = localStorage.getItem('wish-list')
//     if(cartListStr){
//         const storedList =  JSON.parse(cartListStr)
//         return storedList
//     }
//     else{
//         return [];
//     }
// }

// const addStoredWishList = (id) => {
//     const storedList = getStoredCartList()
//     if(storedList.includes(id)){
//         alert('Alrady Added')
//     }
//     else{
//         storedList.push(id)
//         const storedListStr = JSON.stringify(storedList)
//         localStorage.setItem('wish-list',storedListStr)
//     }
// }

export {addStoredCartList,getStoredCartList}