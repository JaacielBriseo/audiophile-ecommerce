'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ProductInCart } from '@/types';
import { CartProduct } from './CartProduct';
import { DeleteCartProducts } from './DeleteCartProducts';
import { Modal } from '../shared/Modal';

interface Props {
	itemsInCart: ProductInCart[];
}

export const CartModal: React.FC<Props> = ({ itemsInCart }) => {
	const [open, setOpen] = useState(false);

	const formattedTotal = useMemo(() => {
		const total = itemsInCart.reduce((acc, current) => acc + current.product.price * current.quantity, 0);
		return new Intl.NumberFormat('en-US').format(total);
	}, [itemsInCart]);

	return (
		<>
			<button type='button' onClick={() => setOpen(current => !current)} aria-label='cart_modal_toggle'>
				<Image src='/assets/shared/icon-cart.svg' alt='Cart' width={0} height={0} className='w-6 h-6' />
			</button>
			{open && (
				<Modal onClose={() => setOpen(false)} isCart fullScreen={false}>
					{itemsInCart.length === 0 ? (
						<span className='text-lg text-center text-black-400 font-semibold'>
							You don&apos;t have any items in your cart yet :(
						</span>
					) : (
						<>
							<div className='flex justify-between w-full'>
								<h1 className='text-lg font-bold uppercase'>Cart ({itemsInCart.length})</h1>
								<DeleteCartProducts />
							</div>
							<ul className='flex flex-col gap-3'>
								{itemsInCart.map(({ product, quantity }) => (
									<li key={product.id}>
										<CartProduct product={product} quantity={quantity} />
									</li>
								))}
							</ul>
							<div className='flex justify-between w-full'>
								<h2 className='text-lg uppercase text-black-400'>TOTAL</h2>
								<p className='text-lg font-bold'>$ {formattedTotal}</p>
							</div>
							<Link onClick={() => setOpen(false)} href={'/checkout'} className='btn-primary'>
								Checkout
							</Link>
						</>
					)}
				</Modal>
			)}
		</>
	);
};
