import { useEffect, useState } from "react";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import Product from "../Product/Product";
import ButtonDiv from "../ButtonDiv/ButtonDiv";

const CardContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex flex-row mt-7 space-x-3">
        {/* Button */}
        <div className="w-1/5">
          <ButtonDiv></ButtonDiv>
        </div>
        {/* Card */}
        <div className="grid grid-cols-3 w-full gap-3">
          {products.map((product) => (
            <Product product={product} key={product.product_id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
