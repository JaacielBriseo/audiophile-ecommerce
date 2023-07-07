import { ProductInCart } from '@/types';
import Image from 'next/image';
import { QuantityHandlers } from './QuantityHandlers';

export const CartProduct = ({ product, quantity }: ProductInCart) => {
	return (
		<div className='flex flex-col space-y-4'>
			<div className='flex w-full justify-between items-center' key={product.id}>
				<Image src={product.image.mobile} alt='Product Name' width={70} height={70} />
				<div className='flex flex-col items-start justify-center w-1/3'>
					<h3 className='truncate w-11/12 font-bold'>{product.name}</h3>
					<p className='font-bold text-black-400'>${product.price}</p>
				</div>
				<QuantityHandlers productId={product.id} initialQuantity={quantity} withSubmitBtn={false} />
			</div>
		</div>
	);
};
