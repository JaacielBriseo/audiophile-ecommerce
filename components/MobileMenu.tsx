'use client';

import Image from 'next/image';
import { Modal } from './Modal';
import { useState } from 'react';
import { CategoriesRoutes } from './CategoriesRoutes';

export const MobileMenu = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<>
			<button
				className='lg:hidden'
				aria-label='Mobile menu toggler'
				onClick={() => setIsMobileMenuOpen(current => !current)}>
				<Image src='/assets/shared/icon-hamburger.svg' alt='Hamburger Icon' width={0} height={0} className='w-5 h-4' />
			</button>
			{isMobileMenuOpen && (
				<Modal onClose={() => setIsMobileMenuOpen(false)}>
					<CategoriesRoutes />
				</Modal>
			)}
		</>
	);
};
