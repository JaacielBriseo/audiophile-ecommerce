'use client';
import { useRouter } from 'next/navigation';
import { addProductToCart } from '@/utils/cart-actions';

interface Props {
	productId: string;
	quantity: number;
}
export const AddProductToCartButton = ({ productId, quantity }: Props) => {
	const router = useRouter();
	return (
		<button
			onClick={() => {
				addProductToCart(productId, quantity);
				router.refresh();
			}}
			className='flex-1 btn-primary md:max-w-[160px]'>
			Add to cart
		</button>
	);
};
