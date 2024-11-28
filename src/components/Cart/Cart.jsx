import { RxCross1 } from "react-icons/rx";

const Cart = ({cart,setTotal,total}) => {
    const {product_image,product_title,specification,price} = cart
    // console.log(price)
    // setTotal(price+total)
    return (
        <div className="flex flex-row justify-between items-center p-2 border-[1px] border-gray-300 rounded-2xl">
            <div className="flex flex-row items-center space-x-5">
                <div>
                    <img className="w-40 h-28 p-3 rounded-2xl border-[1px] border-gray-300" src={product_image} alt="" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-gray-500 font-semibold">{specification}</p>
                    <h3 className="text-xl font-bold">Price : $ {price}</h3>
                </div>
            </div>
            <div>
                <p className="text-red-600 p-3 rounded-full mr-7 border-[1px] border-red-600 w-fit"><RxCross1 /></p>
            </div>
        </div>
    );
};

export default Cart;