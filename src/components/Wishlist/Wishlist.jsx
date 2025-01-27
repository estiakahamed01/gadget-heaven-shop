import { RxCross1 } from "react-icons/rx";
import {  wishListCart } from "../../utility/addToLS";

const Wishlist = ({ wishlist }) => {
    const {product_image,product_title,specification,price,product_id} = wishlist;
    const handleAddToCart = (id) =>{
        wishListCart(id)
      }
    return (
        <div className="flex flex-row justify-between items-center p-2 border-[1px] border-gray-300 rounded-2xl">
            <div className="flex flex-row items-center space-x-5">
                <div>
                    <img className="w-40 h-auto p-3 rounded-2xl border-[1px] border-gray-300" src={product_image} alt="" />
                </div>
                <div className="flex flex-col space-y-3 mb-3">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-gray-500 font-semibold"><span className="font-bold text-black">Description :</span> {specification}</p>
                    <h3 className="text-xl font-bold">Price : $ {price}</h3>
                    <button onClick={() => handleAddToCart(product_id)} className="px-5 py-2 rounded-full bg-[#9538E2] w-fit text-gray-50 font-semibold">Add to Cart</button>
                </div>
            </div>
            <div>
                <p className="text-red-600 p-3 rounded-full mr-7 border-[1px] border-red-600 w-fit"><RxCross1 /></p>
            </div>
        </div>
    );
};

export default Wishlist;