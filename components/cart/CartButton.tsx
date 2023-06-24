import Image from 'next/image';

export const CartButton = () => {
	return (
		<>
			<button>
				<Image src='/assets/shared/icon-cart.svg' alt='Cart' width={0} height={0} className='w-6 h-6' />
			</button>
		</>
	);
};
