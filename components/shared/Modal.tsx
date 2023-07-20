'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
	fullScreen?: boolean;
	isCart?: boolean;
}

export const Modal = ({ children, fullScreen, onClose, isCart = false }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	}, []);

	return mounted
		? createPortal(
				<>
					<div onClick={onClose} className={clsx('fixed inset-0 bg-black-900/70 mt-24', isCart && 'm-0')} />
					<div
						className={clsx(
							'bg-white-100 fixed p-7 rounded-md',
							fullScreen ? 'top-24 w-full h-full md:h-auto' : '',
							isCart ? 'w-[375px] h-fit inset-0 m-auto' : ''
						)}>
						<div className={`flex flex-col justify-between h-full overflow-auto no-scrollbar ${isCart ? 'gap-5' : ''}`}>
							{children}
						</div>
					</div>
				</>,
				document.body
		  )
		: null;
};
