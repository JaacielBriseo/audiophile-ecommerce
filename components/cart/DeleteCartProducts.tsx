'use client';

import { removeAllProductsInCart } from '@/libs/_cookie-cart-actions';

export const DeleteCartProducts = () => {
	return (
		<button
			className='font-medium underline underline-offset-1 text-black-400'
			onClick={() => removeAllProductsInCart()}>
			Remove all
		</button>
	);
};
