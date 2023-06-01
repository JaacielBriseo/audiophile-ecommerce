'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
}

export const Modal = ({ children, onClose }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return mounted
		? createPortal(
				<>
					<div onClick={onClose} className='fixed inset-0 bg-black-900/70 mt-24'>
						<div className='bg-white-100 w-full h-full overflow-auto'>{children}</div>
					</div>
				</>,
				document.body
		  )
		: null;
};
