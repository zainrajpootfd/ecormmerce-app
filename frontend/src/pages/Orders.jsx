import { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t">
      <div className="mt-8 flex justify-start font-light border-b">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div className="flex flex-col gap-4 relative w-full">
        {products.slice(1, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 sm:flex-row items-center justify-between w-full sm:px-4 py-4 border-b"
            >
              {/* Left Section - Image & Order Details */}
              <div className="flex items-center gap-5 ">
                <img
                  src={item.image[0]}
                  className="w-20 sm:w-20 mt-2"
                  alt={item.name}
                />
                <div>
                  <p className="font-light text-gray-700">{item.name}</p>
                  <div className="flex items-center gap-6 my-2 font-light">
                    <p>
                      {currency} {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: L</p>
                  </div>
                  <p>Date: 12/Jan/2025</p>
                </div>
              </div>

              {/* Right Section - Ready to Ship & Track Order */}
              <div className="flex items-center justify-between sm:w-[40%]  sm:p-2 gap-6">
                <div className="flex items-center gap-2">
                  <p className="bg-green-500 w-2.5 h-2.5 border rounded-full"></p>
                  <p className="font-light">Ready To Ship</p>
                </div>
                <button className="font-light border border-gray-400 px-1 py-1 md:px-4 md:py-2 cursor-pointer">
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
