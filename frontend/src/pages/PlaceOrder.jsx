import { useState } from "react";
import { assets } from "../assets/assets";
import CartItem from "../components/CartItem";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  return (
    <div className="border-t  mb-5">
      <div className="text-left flex mt-16 mb-5 ">
        <Title text1="DELIVERY" text2="INFORMATION" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between  gap-6 ">
        <div className="w-full flex flex-col  gap-5  md:max-w-[480px]">
          <div className="flex gap-3 ">
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            />
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
          <div className="flex gap-3 ">
            <input
              type="text"
              placeholder="City"
              className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            />
          </div>
          <div className="flex gap-3 ">
            <input
              type="number"
              placeholder="Zip Code"
              className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            />
          </div>
          <input
            type="number"
            placeholder="Phone"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
        </div>
        <div className=" ">
          <div className=" ">
            <CartItem />
          </div>
          <div className="mt-8 ">
            <div className="mt-8 mb-6 text-xl flex item-center  gap-2 ">
              <p className="text-xl font-medium">
                <span className="text-gray-400">PAYMENT</span> METHOD
              </p>
              <hr className="w-8 sm:w-11 h-[2px] bg-[#414141] mt-3" />
            </div>
            <div className="flex flex-col  gap-3 w-2/2 sm:w-1/2  lg:w-full lg:flex-row ">
              <div
                onClick={() => setMethod("stripe")}
                className="flex item-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "stripe" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img className="h-5 px-4" src={assets.stripe_logo} alt="" />
              </div>
              <div
                onClick={() => setMethod("razorpay")}
                className="flex item-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "razorpay" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img className="h-5 px-4" src={assets.razorpay_logo} alt="" />
              </div>
              <div
                onClick={() => setMethod("cod")}
                className="flex item-center lg:gap-3 border p-2 px-2 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>
                <p className="h-5 px-2 text-xs font-medium">
                  CASH ON DELEVIERY
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-8 flex justify-end md:w-1/2 lg:w-full">
            <button
              onClick={() => navigate("/Orders")}
              className="bg-black text-white font-medium py-2 px-4 rounded  "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceOrder;
