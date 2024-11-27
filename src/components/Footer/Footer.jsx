

const Footer = () => {
    return (
        <div className="bg-gray-100 py-10 mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center space-y-3">
                    <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                    <p>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <hr className="mt-7" />
                <div className="w-3/5 mx-auto flex flex-row justify-between mt-14">
                    <div className=" flex flex-col items-center space-y-3">
                        <h4 className="text-2xl font-bold">Services</h4>
                        <p className="text-gray-500 font-semibold">Product Support</p>
                        <p className="text-gray-500 font-semibold">Order Tracking</p>
                        <p className="text-gray-500 font-semibold">Shipping & Delivery</p>
                        <p className="text-gray-500 font-semibold">Returns</p>
                    </div>

                    <div className=" flex flex-col items-center space-y-3">
                        <h4 className="text-2xl font-bold">Company</h4>
                        <p className="text-gray-500 font-semibold">About Us</p>
                        <p className="text-gray-500 font-semibold">Careers</p>
                        <p className="text-gray-500 font-semibold">Contact</p>
                    </div>
                    
                    <div className=" flex flex-col items-center space-y-3">
                        <h4 className="text-2xl font-bold">Legal</h4>
                        <p className="text-gray-500 font-semibold">Terms of Service</p>
                        <p className="text-gray-500 font-semibold">Privacy Policy</p>
                        <p className="text-gray-500 font-semibold">Cookie Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;