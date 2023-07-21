import Image from 'next/image';
import { getProductsInCart } from '@/libs/_cookie-cart-actions';
import { shippingCost, vatPercentage } from '@/utils';
import { SummaryPriceField } from './SummaryPriceField';

export const Summary = () => {
	const productsInCart = getProductsInCart();

	const total = productsInCart.reduce((acc, current) => acc + current.product.price * current.quantity, 0);

	return (
		<div className='bg-white-100 p-5 flex flex-col rounded-md gap-5'>
			<h1 className='text-lg font-bold tracking-wider uppercase'>Summary</h1>
			<ul className='flex flex-col gap-7'>
				{productsInCart.map(({ product, quantity }) => (
					<li key={product.id} className='flex gap-5'>
						<Image src={product.image.mobile} alt='Product Name' width={70} height={70} className='rounded-md' />
						<div className='flex justify-between w-full'>
							<div className='flex flex-col'>
								<p className='font-bold text-black-900 truncate w-10/12'>{product.name}</p>
								<p className='font-bold text-black-400'>${product.price}</p>
							</div>
							<div>
								<p className='font-bold text-black-400 text-[15px]'>x{quantity}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<SummaryPriceField label='TOTAL' price={total} />
			<SummaryPriceField label='SHIPPING' price={shippingCost} />
			<SummaryPriceField label='VAT(INCLUDED)' price={Math.round((vatPercentage / 100) * total)} />
			<SummaryPriceField label='GRAND TOTAL' price={total + shippingCost} isPrimary />
			<button type='submit' className='btn-primary'>
				CONTINUE & PAY
			</button>
		</div>
	);
};
