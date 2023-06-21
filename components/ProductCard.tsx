import { Product } from '@/types';
import { ProductImage } from './ProductImage';

interface Props {
	product: Product;
}
export const ProductCard = ({ product }: Props) => {
	return (
		<div
			id='product-card'
			className='flex flex-col justify-center items-center space-y-5 md:flex-row md:space-y-0 md:gap-x-5'>
			<ProductImage
				image={product.image}
				alt={product.name}
				width={500}
				height={500}
				className='rounded-lg w-full min-h-80 relative object-cover md:w-1/2 md:h-[480px]'
			/>

			<div className='flex flex-col space-y-5 md:w-10/12'>
				{product.new && <span className='text-orange-600 tracking-[0.8em] uppercase md:text-lg'> New Product</span>}
				<h1 className='font-bold uppercase text-2xl max-w-[50%] lg:text-4xl'>{product.name}</h1>
				<p className='font-medium text-black-400 leading-relaxed md:text-lg'>{product.description}</p>
				<h3 className='font-bold text-lg'>$ {product.price}</h3>
				<div id='cart-buttons' className='flex gap-x-3'>
					<div className='flex items-center bg-white-400' id='cart-add-substract'>
						<button>-1</button>
						<p>item count</p>
						<button>+1</button>
					</div>
					<button className='flex-1 btn-primary md:max-w-[180px]'>Add to cart</button>
				</div>
			</div>
		</div>
	);
};
