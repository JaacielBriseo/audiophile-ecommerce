'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../Modal';
import { CartContent } from './CartContent';

export const CartButton = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	return (
		<>
			<button onClick={() => setCartIsOpen(true)}>
				<Image src='/assets/shared/icon-cart.svg' alt='Cart' width={0} height={0} className='w-6 h-6' />
			</button>
			{cartIsOpen && (
				<Modal onClose={() => setCartIsOpen(false)} cart>
					<CartContent/>
				</Modal>
			)}
		</>
	);
};
