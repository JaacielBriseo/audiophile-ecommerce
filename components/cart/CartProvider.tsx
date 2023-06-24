'use client';
import { PropsWithChildren, useEffect, useReducer, useRef } from 'react';
import { cartReducer } from './cartReducer';
import { CartContext } from './CartContext';
import { Product, ProductInCart } from '@/types';
import { getFromCookies, setCookie } from '@/libs/cookies';

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

	useEffect(() => {
		const cartFromCookies = getFromCookies('cart');
		dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cartFromCookies });
	}, []);

	useEffect(() => {
		if (state.cart.length > 0) setCookie('cart', state.cart);
	}, [state.cart]);

	const addProductToCart = (product: Product, quantity: number) => {
		const productInCart = state.cart.some(prodInCart => prodInCart.id === product.id);
		if (!productInCart) {
			dispatch({ type: '[Cart] - Update Products In Cart', payload: [...state.cart, { ...product, quantity }] });

			return;
		}
		const updatedProducts = state.cart.map(pordInCart => {
			if (pordInCart.id !== product.id) return pordInCart;

			pordInCart.quantity += quantity;
			return pordInCart;
		});
		dispatch({ type: '[Cart] - Update Products In Cart', payload: updatedProducts });
	};

	return <CartContext.Provider value={{ ...state, addProductToCart }}>{children}</CartContext.Provider>;
};
