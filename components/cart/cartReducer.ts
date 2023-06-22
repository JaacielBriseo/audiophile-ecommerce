import { Product, ProductInCart } from '@/types';
import { CartState } from './CartProvider';
type CartActionType =
	| { type: '[Cart] - Add Product To Cart'; payload: { product: Product; quantity: number } }
	| { type: '[Cart] - LoadCart from cookies | storage'; payload: ProductInCart[] };
export const cartReducer = (state: CartState, action: CartActionType): CartState => {
	switch (action.type) {
		case '[Cart] - Add Product To Cart':
			const { product, quantity } = action.payload;
			const existingProductIndex = state.cart.findIndex(item => item.id === product.id);

			if (existingProductIndex !== -1) {
				// Product already exists in the cart, update the quantity
				const updatedCart = [...state.cart];
				updatedCart[existingProductIndex].quantity += quantity;
				return { ...state, cart: updatedCart };
			} else {
				// Product doesn't exist in the cart, add it
				const newCartItem = { ...product, quantity };
				return { ...state, cart: [...state.cart, newCartItem] };
			}

		case '[Cart] - LoadCart from cookies | storage':
			return {
				...state,
				cart: action.payload,
			};
		default:
			return state;
	}
};
