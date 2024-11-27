import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../utility/addToLS";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Dashboard = () => {
    const allProducts = useLoaderData()
    const [cartList, setCartList] = useState([])
    const [isActive, setIsActive] = useState(true)
    useEffect(() => {
        const storedCartLists = getStoredCartList()
        const storedCartListsInt = storedCartLists.map(id => parseInt(id))

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
            {/* {isButtonActive ? "py-3 px-11 text-lg rounded-full bg-white font-bold text-[#9538E2]" : "py-3 px-11 text-lg rounded-full text-white font-semibold border-white border-[1px]"} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
