import { useState } from 'react';

const initialState = {
    cart: [],
    toggleOrders: false,
}

const useInicialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state, 
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        });
    }

    const setToggleOrders = (payload) => {
        setState({
            ...state,
            toggleOrders: payload
        });
    }

    return {
        state,
        addToCart,
        removeFromCart,
        setToggleOrders
    }
}

export default useInicialState;