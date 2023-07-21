import { GoBackButton } from '@/components/shared/GoBackButton';

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-white-400 space-y-12 py-10 px-10 md:px-12 lg:px-24 relative'>
			<GoBackButton />
			{children}
		</div>
	);
}
