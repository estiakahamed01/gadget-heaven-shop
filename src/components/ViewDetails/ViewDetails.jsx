import { useLoaderData, useParams } from "react-router-dom";
import Specification from "../Specification/Specification";
import { RiStarFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { addStoredCartList } from "../../utility/addToLS";

const ViewDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const product = data.find((product) => product.product_id == id);

  const {
    product_title,
    product_image,
    price,
    availability,
    description,
    specification,
    rating,
  } = product;

  const handleAddToCart = (id) =>{
    addStoredCartList(id)
  }
  

  return (
    <div className="mb-64">
      <div className="bg-[#9538E2] py-5 flex flex-col justify-center items-center space-y-5 pb-64">
        <h1 className="text-white text-4xl font-bold">Product Details</h1>
        <p className="font-semibold text-gray-50 w-2/6 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="relative w-3/6 mx-auto -top-64 p-4">
        <div className="p-5 border-2 flex flex-row items-center gap-5 rounded-2xl absolute bg-white">
          <div className="w-1/3">
            <img
              className="border-[1px] rounded-xl h-full"
              src={product_image}
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-bold">{product_title}</h1>
              <p className="text-lg text-gray-500 font-semibold">
                Price : {price}
              </p>
              {availability ? (
                <button className="py-1 px-3 w-fit bg-green-200 border-[1px] text-sm border-green-500 rounded-full">
                  In Stock
                </button>
              ) : (
                <button className="py-1 px-3 w-fit bg-red-200 border-[1px] text-sm border-red-500 rounded-full">
                  Stock Out
                </button>
              )}
              <p className="text-base font-semibold text-gray-500">
                {description}
              </p>
              <h3 className="text-lg font-bold">Specification :</h3>
              <div>
                {specification.map((specific, index) => (
                  <Specification
                    specific={specific}
                    key={index}
                  ></Specification>
                ))}
              </div>
              <h3 className="inline-flex items-center gap-2 text-lg font-bold">
                Rating : {rating} <RiStarFill />
              </h3>
              <div className="flex flex-row items-center gap-5">
                <button onClick={() => handleAddToCart(product_id)} className="inline-flex items-center gap-2 py-3 px-6 rounded-full font-semibold text-white bg-[#9538E2]">
                  Add To Cart <BsCart3 />
                </button>
                <button  className="border-[1px] p-3 text-gray-500 rounded-full text-2xl">
                  <MdOutlineFavoriteBorder />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
