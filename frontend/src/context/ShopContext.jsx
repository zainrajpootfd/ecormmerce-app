import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [cartItems, setCartItems] = useState({});

  // const addToCart = (itemId, size) => {
  //   let cartData = structuredClone(cartItems);
  //   if (cartItems[itemId]) {
  //     if (cartItems[itemId][size]) {
  //       cartItems[itemId][size] = +1;
  //     } else {
  //       cartItems[itemId][size] = 1;
  //     }
  //   } else {
  //     cartItems[itemId][size] = {};
  //     cartItems[itemId][size] = 1;
  //   }
  //   setCartItems(cartData);
  // };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    // Create a deep copy of cartItems to avoid direct mutation
    let cartData = structuredClone(cartItems);

    // Check if the itemId exists
    if (!cartData[itemId]) {
      cartData[itemId] = {}; // Initialize the item if it doesn't exist
    }

    // Check if the size exists
    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 0; // Initialize the size if it doesn't exist
    }

    // Increment the quantity
    cartData[itemId][size] += 1;

    // Update state
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item]; // Use "item" instead of "size"
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }

    return totalCount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    searchTerm,
    setSearchTerm,
    cartItems,
    addToCart,
    getCartCount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

ShopContext.js;
