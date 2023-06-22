'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
	fullScreen?: boolean;
	cart?: boolean;
}

export const Modal = ({ children, fullScreen, onClose, cart }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	}, []);

	return mounted
		? createPortal(
				<>
					<div onClick={onClose} className='fixed inset-0 bg-black-900/70 mt-24' />
					<div
						className={clsx(
							'bg-white-100 fixed p-7 rounded-md',
							fullScreen ? 'top-24 w-full h-full md:h-auto' : 'inset-20',
							cart ? 'w-[375px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]' : ''
						)}>
						<div className='flex flex-col justify-between h-full overflow-auto no-scrollbar'>{children}</div>
					</div>
				</>,
				document.body
		  )
		: null;
};
