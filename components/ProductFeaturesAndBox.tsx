import { Include } from '@/types';

interface Props {
	features: string;
	includes: Include[];
}
export const ProductFeaturesAndBox = ({ features, includes }: Props) => {
	return (
		<div className='flex flex-col space-y-14 lg:flex-row lg:space-y-0 lg:space-x-4'>
			<div className='space-y-3 lg:w-8/12 xl:w-7/12'>
				<h1 className='uppercase font-bold text-xl md:text-2xl'>Features</h1>
				<p className='font-medium text-black-400 leading-relaxed md:text-lg'>{features}</p>
			</div>
			<div className='md:flex md:justify-between lg:flex-col lg:justify-normal lg:space-y-5'>
				<h2 className='uppercase font-bold text-xl md:text-2xl'>In the box</h2>
				<ul className='flex flex-col space-y-2 mt-4 md:mt-0'>
					{includes.map(({ item, quantity }) => (
						<li key={item} className='flex space-x-10'>
							<p className='text-orange-600 font-bold'>{quantity}x</p>
							<p className='text-black-400 font-medium'>{item}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
