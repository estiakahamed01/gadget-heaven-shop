import Swal from "sweetalert2";

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
const wishListCart = (id) =>{
    const strId = JSON.stringify(id)
    addStoredCartList(strId)
}

const addStoredCartList = (id) => {
    const storedList = getStoredCartList()
    if(storedList.includes(id)){
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already Added Cartlist",
            showConfirmButton: false,
            timer: 1500
          });
        return 
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list',storedListStr)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added Cartlist Successfully",
            showConfirmButton: false,
            timer: 1500
          });
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
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already Added Cartlist",
            showConfirmButton: false,
            timer: 1500
          });
          return;
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added Wishlist Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
}


export {addStoredCartList,getStoredCartList,addToStoredWishList,getStoredWishList,wishListCart}