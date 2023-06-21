'use client';
import { useRouter } from 'next/navigation';

export const GoBackButton = () => {
	const router = useRouter();
	return (
		<div className='absolute top-10 cursor-pointer' onClick={() => router.back()}>
			<span className='font-medium text-black-400'>Go Back</span>
		</div>
	);
};
