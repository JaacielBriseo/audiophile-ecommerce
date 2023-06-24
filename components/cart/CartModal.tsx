'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CartContent } from './CartContent';
import { Modal } from '../Modal';
import { getCookieCartProducts } from './actions';
import { ProductInCart } from '@/types';

export const CartModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cart = getCookieCartProducts();
	return (
		<>
			<button onClick={() => setIsOpen(current => !current)}>
				<Image src='/assets/shared/icon-cart.svg' alt='Cart' width={0} height={0} className='w-6 h-6' />
			</button>
			{isOpen && (
				<Modal onClose={() => setIsOpen(false)} cart>
					<CartContent cart={cart} />
				</Modal>
			)}
		</>
	);
};
