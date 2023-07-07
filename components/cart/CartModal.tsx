import Image from 'next/image';
import { getProductsInCart } from '@/libs/_cookie-cart-actions';
import { CartProduct } from './CartProduct';

export const CartModal = () => {
	const itemsInCart = getProductsInCart();
	console.log({ products: itemsInCart });
	return (
		<>
			<input type='checkbox' name='toggle-cart-modal' id='toggle-modal' className='modal-handler peer hidden' />
			<label htmlFor='toggle-modal'>
				<Image src='/assets/shared/icon-cart.svg' alt='Cart' width={0} height={0} className='w-6 h-6' />
			</label>

			{/* Background of the modal */}
			<label
				htmlFor='toggle-modal'
				className='fixed inset-0 bg-black-900/70 mt-24 z-50 hidden peer-[.modal-handler]:peer-checked:flex'
			/>
			{/* Content of the modal */}
			<div className='bg-white-100 w-[327px] h-fit p-7 rounded-md hidden peer-[.modal-handler]:peer-checked:flex z-50 fixed inset-0 m-auto'>
				<div className='flex flex-col justify-between h-full w-full overflow-auto no-scrollbar '>
					<div className='flex justify-between w-full'>
						<h1>Cart ({itemsInCart.length})</h1>
						<span>Remove all</span>
					</div>
					<ul>
						{itemsInCart.map(({ product, quantity }) => (
							<li key={product.id}>
								<CartProduct product={product} quantity={quantity} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
