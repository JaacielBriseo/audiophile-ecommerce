'use client';

import { useContext, useState } from 'react';
import { Product } from '@/types';
import { addProductToCart } from './actions';
import { useRouter } from 'next/navigation';

export const CartQuantityControls = ({ product }: { product: Product }) => {
	const [quantity, setQuantity] = useState(0);
	const router = useRouter();
	function onAddToCart() {
		addProductToCart(product, quantity);
		// router.refresh();
	}
	return (
		<div className='flex gap-x-3'>
			<div className='flex items-center bg-white-400 w-1/3 justify-around'>
				<button onClick={() => setQuantity(current => Math.max(current - 1, 0))}>-</button>
				<p>{quantity}</p>
				<button onClick={() => setQuantity(current => current + 1)}>+</button>
			</div>
			<button onClick={onAddToCart} className='flex-1 btn-primary md:max-w-[180px]'>
				Add to cart
			</button>
		</div>
	);
};
