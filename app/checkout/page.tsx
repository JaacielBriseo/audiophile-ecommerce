import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { Summary } from '@/components/checkout/Summary';

export default function CheckoutPage() {
	return (
		<CheckoutForm className='flex flex-col gap-5'>
			<div className='bg-white-100 p-5 flex flex-col rounded-md gap-5'>
				<h1 className='text-lg text-black-900 uppercase font-bold'>Checkout</h1>
			</div>
			<Summary />
		</CheckoutForm>
	);
}
