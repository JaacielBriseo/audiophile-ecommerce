import { Gallery } from '@/types';
import { ProductImage } from './ProductImage';

interface Props {
	gallery: Gallery;
}
export const ProductGallery = ({ gallery }: Props) => {
	return (
		<div className='grid md:grid-cols-2 md:grid-rows-2 gap-4'>
			<ProductImage
				image={gallery.first}
				alt='Product Gallery Item'
				width={500}
				height={500}
				className='w-full rounded-lg object-cover'
			/>
			<ProductImage
				image={gallery.second}
				alt='Product Gallery Item'
				width={500}
				height={500}
				className='w-full rounded-lg md:col-start-1 md:row-start-2 object-cover'
			/>
			<ProductImage
				image={gallery.third}
				alt='Product Gallery Item'
				width={500}
				height={500}
				className='w-full h-full object-cover rounded-lg md:row-span-2 md:col-start-2 md:row-start-1'
			/>
		</div>
	);
};
