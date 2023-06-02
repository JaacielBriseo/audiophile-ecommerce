'use client';

import clsx from 'clsx';
import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
	fullScreen?: boolean;
}

export const Modal = ({ children, fullScreen, onClose }: Props) => {
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
							fullScreen ? 'top-24 w-full h-full md:h-auto' : 'inset-20'
						)}>
						<div className='flex flex-col justify-between h-full overflow-auto no-scrollbar'>{children}</div>
					</div>
				</>,
				document.body
		  )
		: null;
};
