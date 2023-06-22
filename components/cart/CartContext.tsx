'use client';
import { createContext } from 'react';
import { Product, ProductInCart } from '@/types';

interface ContextProps {
	cart: ProductInCart[];
	isCartModalOpen: boolean;

	addProductToCart: (product: Product,quantity:number) => void;
}

export const CartContext = createContext({} as ContextProps);
