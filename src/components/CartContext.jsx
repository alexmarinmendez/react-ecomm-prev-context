import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        setCartList([...cartList, {qty, ...item}]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;