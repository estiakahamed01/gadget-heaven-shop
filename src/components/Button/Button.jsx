import { NavLink } from "react-router-dom";


const Button = ({button}) => {
    const { category,slug } = button;
    return (
        <div className="px-5 py-3 bg-gray-100 rounded-full">
            <NavLink to="/product/:${category}"><button>{category}</button></NavLink>
        </div>
    );
};

export default Button;