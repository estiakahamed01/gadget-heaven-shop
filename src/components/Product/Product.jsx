import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {price,product_title,product_image,product_id} = product
    return (
        <div className="p-4 border-solid border-[1px] border-gray-400 rounded-2xl space-y-5">
            <img className="w-full h-52 rounded-xl border-[1px]" src={product_image} alt="" />
            <h2 className="text-2xl font-bold">{product_title}</h2>
            <p className="text-gray-500 font-semibold">Price : {price}k</p>
            <Link to={`/product/${product_id}`}><button className="px-5 py-3 mt-5 border-[#9538E2] border-outline border-2 rounded-full text-[#9538E2] font-semibold">View Details</button></Link>
        </div>
    );
};

export default Product;