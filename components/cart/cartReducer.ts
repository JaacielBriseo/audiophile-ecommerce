import { ProductInCart } from '@/types';
import { CartState } from './CartProvider';
type CartActionType =
	| { type: '[Cart] - Update Products In Cart'; payload: ProductInCart[] }
	| { type: '[Cart] - Change product in cart quantity'; payload: ProductInCart }
	| { type: '[Cart] - LoadCart from cookies | storage'; payload: ProductInCart[] };
export const cartReducer = (state: CartState, action: CartActionType): CartState => {
	switch (action.type) {
		case '[Cart] - LoadCart from cookies | storage':
			return {
				...state,
				cart: action.payload,
			};
		case '[Cart] - Update Products In Cart':
			return {
				...state,
				cart: [...action.payload],
			};
		case '[Cart] - Change product in cart quantity':
			return {
				...state,
				cart: state.cart.map(product => {
					if (product.id !== action.payload.id) return product;

					return action.payload;
				}),
			};
		default:
			return state;
	}
};
