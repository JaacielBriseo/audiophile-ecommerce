import { ProductInCart } from '@/types';
import Image from 'next/image';
interface Props {
	cart: ProductInCart[];
}
export const CartContent = ({ cart }: Props) => {
	
	return (
		<div className='flex flex-col space-y-5'>
			<div className='flex justify-between'>
				<h1 className='uppercase font-black text-xl'>CART: ({cart.length})</h1>
				<u className='text-black-400'>Remove all</u>
			</div>
			<div className='flex flex-col space-y-4'>
				{cart.map(product => (
					<div className='flex w-full justify-between items-center' key={product.id}>
						<Image src={product.image.mobile} alt='Product Name' width={70} height={70} />
						<div className='flex flex-col items-start justify-center w-1/3'>
							<h3 className='truncate w-11/12 font-bold'>{product.name}</h3>
							<p className='font-bold text-black-400'>${product.price}</p>
						</div>
						<div className='flex items-center bg-white-400 w-1/3 justify-around p-2'>
							<button>-</button>
							<p className='font-bold'>{product.quantity}</p>
							<button>+</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
