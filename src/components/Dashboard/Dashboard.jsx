import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../utility/addToLS";
import 'react-tabs/style/react-tabs.css';
import Cart from "../Cart/Cart";
const Dashboard = () => {
    const allProducts = useLoaderData()
    const [cartList, setCartList] = useState([])
    const [isActive, setIsActive] = useState(true)
    

    useEffect(() => {
        const storedCartLists = getStoredCartList()
        const storedCartListsInt = storedCartLists.map(id => parseInt(id))
        console.log(storedCartLists, allProducts, storedCartListsInt)
        const CartList = allProducts.filter(product => storedCartListsInt.includes(product.product_id))

        setCartList(CartList)
    },[])
    const handleCart = () =>{
      setIsActive(!isActive)
    }
    const handleWish = () =>{
      setIsActive(!isActive)
    }
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
    <div className="w-10/12 p-7 mx-auto space-y-4">
      <div>
        <div>
          <h2 className="text-2xl font-bold">Cart</h2>
        </div>
        <div>
          <h2>Total cost : </h2>
        </div>
      </div>
      {
        cartList.map(cart => <Cart key={cart.product_id} cart={cart}></Cart>)
      }
    </div>
    {/* Wish Div */}
    <div>

    </div>
    </div>
  );
};

export default Dashboard;
