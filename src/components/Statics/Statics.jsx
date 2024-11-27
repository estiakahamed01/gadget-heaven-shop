import LineChart from "../LineChart/lINEcHART.JSX";

const Statics = () => {
  return (
    <div>
      <div className="bg-[#9538E2] py-7 flex flex-col justify-center items-center">
        <h3 className="text-3xl text-white font-bold">Statistics</h3>
        <p className="w-1/2 text-center text-base font-semibold text-gray-300 mt-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-10/12 mx-auto mt-7">
      <LineChart></LineChart>
      </div>
    </div>
  );
};

export default Statics;
