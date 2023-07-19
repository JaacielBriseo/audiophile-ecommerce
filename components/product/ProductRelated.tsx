import { Other } from '@/types';
import { LinkButton } from '@/components/shared/LinkButton';
import { ProductImage } from './ProductImage';

interface Props {
	relatedProducts: Other[];
}
export const ProductRelated = ({ relatedProducts }: Props) => {
	return (
		<div className='flex flex-col justify-center items-center space-y-5'>
			<h1 className='font-black uppercase text-2xl'>You may also like</h1>
			<ul className='space-y-10 md:flex md:space-y-0 md:gap-4 w-full'>
				{relatedProducts.map(({ image, name, slug }) => (
					<li key={name} className='flex flex-col items-center space-y-5'>
						<ProductImage image={image} alt={slug} width={500} height={500} />
						<h3 className='font-bold uppercase text-2xl'>{name}</h3>
						<LinkButton href={`/products/${slug}`} text='See product' primary />
					</li>
				))}
			</ul>
		</div>
	);
};
