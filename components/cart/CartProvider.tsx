'use client';
import { PropsWithChildren, useEffect, useReducer, useRef } from 'react';
import { cartReducer } from './cartReducer';
import { CartContext } from './CartContext';
import { Product, ProductInCart } from '@/types';
import Cookies from 'js-cookie';

export interface CartState {
	cart: ProductInCart[];
	isCartModalOpen: boolean;
}

const Cart_INITIAL_STATE: CartState = {
	cart: [],
	isCartModalOpen: false,
};
export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);
	const firstTimeLoad = useRef(true);

	const addProductToCart = (product: Product, quantity: number) => {
		dispatch({ payload: { product, quantity }, type: '[Cart] - Add Product To Cart' });
	};

	useEffect(() => {
		try {
			const cookieProducts = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')!) : [];
			dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
		} catch (error) {
			dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
		}
	}, []);

	useEffect(() => {
		if (firstTimeLoad.current) {
			firstTimeLoad.current = false;
			if (state.cart.length === 0) {
				return;
			}
		}
		Cookies.set('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	return <CartContext.Provider value={{ ...state, addProductToCart }}>{children}</CartContext.Provider>;
};
