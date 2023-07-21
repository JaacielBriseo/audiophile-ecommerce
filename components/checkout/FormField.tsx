import { BillingDetails, CheckoutForm, FormSection, PaymentDetails, ShippingInfo } from '@/types';
import { ChangeEvent } from 'react';

interface Props {
	formObject: BillingDetails | ShippingInfo | PaymentDetails;
	title: string;
	onInputChange: (e: ChangeEvent<HTMLInputElement>, formSection: keyof CheckoutForm) => void;
	formSection: FormSection;
}
export const FormField: React.FC<Props> = ({ title, formSection, onInputChange, formObject }) => {
	return (
		<div className='flex flex-col gap-5'>
			<div className='space-y-5'>
				<h5 className='text-orange-600 font-bold'>{title}</h5>
				<div className='flex flex-col gap-5'>
					{Object.entries(formObject).map(([fieldName, fieldValue]) => (
						<fieldset key={fieldName} className='flex flex-col gap-2'>
							<label htmlFor={fieldName} className='capitalize text-black-900 font-bold'>
								{fieldName}
							</label>
							<input
								type='text'
								name={fieldName}
								value={fieldValue}
								onChange={e => onInputChange(e, formSection)}
								placeholder={fieldName}
								className='border py-3 px-5 placeholder:text-black-600 rounded-lg border-black-400'
							/>
						</fieldset>
					))}
				</div>
			</div>
		</div>
	);
};
