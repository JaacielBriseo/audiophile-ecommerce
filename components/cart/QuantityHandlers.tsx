'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import { addProductToCart, removeSingleItemFromCart } from '@/utils/cart-actions';
import { AddProductToCartButton } from './AddProductToCartButton';

interface Props {
	productId: string;
	initialQuantity?: number;
	withSubmitBtn?: boolean;
}
export const QuantityHandlers = ({ productId, initialQuantity = 1, withSubmitBtn = true }: Props) => {
	const router = useRouter();
	const [quantity, setQuantity] = useState(initialQuantity);

	const onIncrementQuantity = () => {
		setQuantity(c => c + 1);

		if (withSubmitBtn) return;

		addProductToCart(productId);

		router.refresh();
	};

	const onDecrementQuantity = () => {
		setQuantity(c => c - 1);

		if (withSubmitBtn) return;

		removeSingleItemFromCart(productId);

		router.refresh();
	};

	return (
		<div id='cart-buttons' className='flex gap-x-3'>
			<div
				className={clsx('flex justify-center items-center gap-5 bg-white-400 max-w-[120px]', withSubmitBtn ? 'w-1/3' : 'w-full p-1')}
				id='cart-add-substract'>
				<button className='w-1/3' onClick={onDecrementQuantity}>
					<p className='text-black-400 font-bold text-sm'>-</p>
				</button>
				<p className='font-bold'>{quantity}</p>
				<button className='w-1/3' onClick={onIncrementQuantity}>
					<p className='text-black-400 font-bold text-sm'>+</p>
				</button>
			</div>
			{withSubmitBtn && <AddProductToCartButton productId={productId} quantity={quantity} />}
		</div>
	);
};
