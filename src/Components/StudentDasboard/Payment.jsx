import { useState } from "react";
import ManagePayments from "./ManagePayments";
import AllBuys from "./AllBuys";

const Payment = () => {
  const [activeTab, setActiveTab] = useState("allbuys");

  return (
    <div className="max-w-screen dark:bg-black dark:text-white dark:border dark:border-white mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === "allbuys"
              ? "border-b-2 border-indigo-700 font-bold"
              : ""
          }`}
          onClick={() => setActiveTab("allbuys")}
        >
          All Buys
        </button>
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === "payments"
              ? "border-b-2 border-blue-500 font-bold"
              : ""
          }`}
          onClick={() => setActiveTab("payments")}
        >
          Payment Methods
        </button>
      </div>

   
      <div className="mt-6 border rounded-lg shadow-lg lg:p-6 bg-white dark:bg-black dark:text-white dark:border dark:border-white">
        {activeTab === "allbuys" ? (
          <div className="">
            <AllBuys/>
          
          </div>
        ) : (
          <div className="">
            <ManagePayments />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
