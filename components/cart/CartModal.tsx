import Image from 'next/image';
import { getProductsInCart } from '@/libs/_cookie-cart-actions';
import { CartProduct } from './CartProduct';
import { DeleteCartProducts } from './DeleteCartProducts';
import Link from 'next/link';

export const CartModal = () => {
	const itemsInCart = getProductsInCart();
	const total = itemsInCart.reduce((acc, current) => acc + current.product.price * current.quantity, 0);
	const formattedTotal = new Intl.NumberFormat().format(total)
	return (
		<>
			<input type='checkbox' name='toggle-cart-modal' id='toggle-modal' className='modal-handler peer hidden' />
			<label htmlFor='toggle-modal'>
				<Image src='/assets/shared/icon-cart.svg' alt='Cart' width={0} height={0} className='w-6 h-6' />
			</label>

			{/* Background of the modal */}
			<label
				htmlFor='toggle-modal'
				className='fixed inset-0 bg-black-900/70 mt-24 z-50 hidden peer-[.modal-handler]:peer-checked:flex '
			/>
			{/* Content of the modal */}
			<div className='bg-white-100 w-[375px] h-fit p-5 md:p-7 rounded-md hidden peer-[.modal-handler]:peer-checked:flex z-50 fixed inset-0 m-auto'>
				<div className='flex flex-col justify-between h-full w-full overflow-auto no-scrollbar gap-5'>
					<div className='flex justify-between w-full'>
						<h1 className='text-lg font-bold uppercase'>Cart ({itemsInCart.length})</h1>
						<DeleteCartProducts />
					</div>
					<ul className='flex flex-col gap-3'>
						{itemsInCart.map(({ product, quantity }) => (
							<li key={product.id}>
								<CartProduct product={product} quantity={quantity} />
							</li>
						))}
					</ul>
					<div className='flex justify-between w-full'>
						<h2 className='text-lg uppercase text-black-400'>TOTAL</h2>
						<p className='text-lg font-bold'>$ {formattedTotal}</p>
					</div>
					<Link href={'/checkout'} className='btn-primary'>Checkout</Link>
				</div>
			</div>
		</>
	);
};
