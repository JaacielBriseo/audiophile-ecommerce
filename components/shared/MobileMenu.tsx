'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Modal } from './Modal';
import { CategoriesRoutes } from './CategoriesRoutes';
import { useWindowSize } from '@/hooks/useWindowSize';

export const MobileMenu = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { width } = useWindowSize();
	useEffect(() => {
		width && width >= 1024 && setIsMobileMenuOpen(false);
	}, [width]);

	return (
		<>
			<button
				className='lg:hidden'
				aria-label='Mobile menu toggler'
				onClick={() => setIsMobileMenuOpen(current => !current)}>
				<Image src='/assets/shared/icon-hamburger.svg' alt='Hamburger Icon' width={0} height={0} className='w-5 h-4' />
			</button>
			{isMobileMenuOpen && (
				<Modal onClose={() => setIsMobileMenuOpen(false)} fullScreen>
					<CategoriesRoutes />
				</Modal>
			)}
		</>
	);
};
