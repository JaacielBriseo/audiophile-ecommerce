'use client';

import { useContext } from 'react';
import { FormContext } from './CheckoutForm';
import { FormField } from './FormField';

export const CheckoutFormFields = () => {
	const { formValues, onInputChange } = useContext(FormContext);
	const { billingDetails, paymentDetails, shippingInfo } = formValues;
	return (
		<>
			<FormField
				title='Billing Details'
				formObject={billingDetails}
				formSection='billingDetails'
				onInputChange={onInputChange}
			/>
			<FormField
				title='Shipping Info'
				formObject={shippingInfo}
				formSection='shippingInfo'
				onInputChange={onInputChange}
			/>
			<FormField
				title='Payment Details'
				formObject={paymentDetails}
				formSection='paymentDetails'
				onInputChange={onInputChange}
			/>
		</>
	);
};
