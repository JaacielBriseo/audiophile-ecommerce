interface Props {
	label: string;
	price: number;
	isPrimary?: boolean;
}
export const SummaryPriceField: React.FC<Props> = ({ label, price, isPrimary = false }) => {
	const formattedPrice = new Intl.NumberFormat('en-US').format(price);
	return (
		<div className='flex flex-col'>
			<div className='w-full flex justify-between'>
				<p className='uppercase text-[15px] font-bold text-black-400'>{label}</p>
				<p className={`font-bold text-lg ${isPrimary ? 'text-orange-600' : 'text-black-900'}`}>${formattedPrice}</p>
			</div>
		</div>
	);
};
