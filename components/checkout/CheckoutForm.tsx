'use client';

import { FormEvent, createContext, useState } from 'react';
import { CheckoutForm as CheckoutFormType, FormSection, PaymentMethod } from '@/types';

interface Props {
	children: React.ReactNode;
	className?: string;
}

const initialFormValues: CheckoutFormType = {
	billingDetails: {
		name: '',
		emailAddress: '',
		phoneNumber: '',
	},
	shippingInfo: {
		yourAddress: '',
		zipCode: '',
		city: '',
		country: '',
	},
	paymentDetails: {
		paymentMethod: PaymentMethod.EMONEY,
		emoneyNumber: '',
		emoneyPin: '',
	},
};
interface FormContext {
	formValues: CheckoutFormType;
	onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>, formSection: FormSection) => void;
	onSubmit: (e: FormEvent) => void;
}
export const FormContext = createContext({} as FormContext);

export const CheckoutForm: React.FC<Props> = ({ children, className }) => {
	const [form, setForm] = useState<CheckoutFormType>(initialFormValues);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, formSection: FormSection) => {
		const { name, value } = e.target;
		setForm(currentForm => ({
			...currentForm,
			[formSection]: {
				...currentForm[formSection],
				[name]: value,
			},
		}));
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log({ form });
	};

	return (
		<FormContext.Provider value={{ formValues: form, onInputChange, onSubmit }}>
			<form onSubmit={onSubmit} className={className}>
				{children}
			</form>
		</FormContext.Provider>
	);
};
