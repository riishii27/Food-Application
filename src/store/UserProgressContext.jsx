import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: ()=>{},
    hideCart: ()=>{},
    showCheckout: ()=>{},
    hideCheckuout:()=>{},
});
export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress]=useState('');

    function showCart(){
        setUserProgress('cart')
    }

    function hideCart(){
        setUserProgress('');
    }
    
    function showCheckout(){
        setUserProgress('checkout');
    }

    function hideCheckuout(){
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckuout
    };

    return (
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext