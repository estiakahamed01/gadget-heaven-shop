import { RxCross1 } from "react-icons/rx";

const Cart = ({cart,setCartList,cartList}) => {
    // const {product_id,product_image,product_title,specification,price} = cart
    // console.log(price)
    // setTotal(price+total)
    const deleteProduct = (id) => {
        setCartList(cartList.filter(cartList => cartList.product_id !== cart.product_id));
      };
    return (
        <div className="flex flex-row justify-between items-center p-2 border-[1px] border-gray-300 rounded-2xl">
            <div className="flex flex-row items-center space-x-5">
                <div>
                    <img className="w-40 h-28 p-3 rounded-2xl border-[1px] border-gray-300" src={cart.product_image} alt="" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h2 className="text-2xl font-bold">{cart.product_title}</h2>
                    <p className="text-gray-500 font-semibold">{cart.specification}</p>
                    <h3 className="text-xl font-bold">Price : $ {cart.price}</h3>
                </div>
            </div>
            <div>
                <p onClick={() => deleteProduct(cart.product_id)} className="text-red-600 p-3 rounded-full mr-7 border-[1px] border-red-600 w-fit"><RxCross1 /></p>
            </div>
        </div>
    );
};

export default Cart;