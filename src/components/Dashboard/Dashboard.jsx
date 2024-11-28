import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../../utility/addToLS";
import 'react-tabs/style/react-tabs.css';
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
const Dashboard = () => {
    const allProducts = useLoaderData()
    const [cartList, setCartList] = useState([])
    const [wishList, setWishList] = useState([])
    const [isActive, setIsActive] = useState(true)
    const [total, setTotal] = useState(0)

    

    useEffect(() => {
        const storedCartLists = getStoredCartList()
        const storedCartListsInt = storedCartLists.map(id => parseInt(id))
        console.log(storedCartLists, allProducts, storedCartListsInt)
        const CartList = allProducts.filter(product => storedCartListsInt.includes(product.product_id))

        setCartList(CartList)
    },[])
    useEffect(() => {
        const storedWishList = getStoredWishList()
        const storedWishListInt = storedWishList.map(id => parseInt(id))
        const WishListN = allProducts.filter(product => storedWishListInt.includes(product.product_id))

        setWishList(WishListN)
    },[])

    const handleCart = () =>{
      setIsActive(!isActive)
    }
    const handleWish = () =>{
      setIsActive(!isActive)
    }
    const totalPrice = cartList.reduce((acc, current) => acc + current.price, 0);

  useEffect(() => {
    setTotal(totalPrice);
  }, [totalPrice]);
  return (
    <div>
      <div className="bg-[#9538E2]">
      <div className="container mx-auto flex flex-col justify-center items-center py-8 space-y-4">
        <h1 className="text-4xl text-white font-semibold">Dashboard</h1>
        <p className="w-1/2 text-center text-base font-semibold text-gray-300">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-5">
            <button onClick={handleCart} className={isActive ? "py-3 px-11 text-lg rounded-full bg-white font-bold text-[#9538E2]" : "py-3 px-11 text-lg rounded-full text-white font-semibold border-white border-[1px]"}>Cart</button>
           <button onClick={handleWish} className={isActive ? "py-3 px-11 text-lg rounded-full text-white font-semibold border-white border-[1px]" : "py-3 px-11 text-lg rounded-full bg-white font-bold text-[#9538E2]"}>Wishlist</button>
        </div>
        
      </div>
    </div>
    {/* Cart Div */}
    <div className={!isActive ? "hidden" : "w-10/12 p-7 mx-auto space-y-4 block"}>
      <div>
        <div>
          <h2 className="text-2xl font-bold">Cart</h2>
        </div>
        <div>
          <h2>Total cost : {total}</h2>
        </div>
      </div>
      {
        cartList.map(cart => <Cart total={total} setTotal={setTotal} key={cart.product_id} cart={cart}></Cart>)
      }
    </div>
    {/* Wish Div */}
    <div className={!isActive ? "w-10/12 p-7 mx-auto space-y-4 block" : "hidden"}>
        <h2 className="text-2xl font-bold">Wishlist</h2>
        <div>
        {
          wishList.map(wishlist => <Wishlist wishlist={wishlist} key={wishlist.product_id}></Wishlist>)
        }
        </div>
    </div>
    </div>
  );
};

export default Dashboard;
