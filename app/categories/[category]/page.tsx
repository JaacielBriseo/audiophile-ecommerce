import { LinkButton, ProductImage } from '@/components';
import { Product } from '@/types';

interface Props {
	params: { category: string };
}

const getCategoryProducts = async (category: string): Promise<Product[]> => {
	const response = await fetch(`http://localhost:3000/api/categories/${category}`);

	if (!response.ok) {
		throw new Error('Error fetching category products');
	}
	return response.json();
};

const CategoryPage = async ({ params: { category } }: Props) => {
	const productsByCategory = await getCategoryProducts(category);
	return (
		<>
			<header className='bg-black-900 absolute top-0 left-0 w-full h-24 flex flex-col items-center justify-center'>
				<p className='text-white-100 text-center font-bold text-3xl uppercase tracking-wider'>{category}</p>
			</header>
			<div className='flex flex-col space-y-20'>
				{productsByCategory.map((product, i) => (
					<div
						key={product.id}
						className={` w-full flex flex-col items-center justify-center space-y-5 md:space-y-10 ${
							i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
						}`}>
						{/* Client component to handle responsive images with useWindowSize hook*/}

						<ProductImage
							image={product.categoryImage}
							alt={product.slug}
							width={500}
							height={500}
							className='w-full h-[352px] relative lg:w-1/2 lg:h-[560px] object-cover rounded-lg'
						/>

						<div
							className={`flex flex-col items-center justify-center space-y-5 md:space-y-8 lg:w-1/2 lg:mx-5 lg:items-start ${
								i % 2 === 0 ? 'lg:pl-20' : ''
							}`}>
							{product.new && (
								<span className='text-orange-600 tracking-[0.8em] uppercase md:text-lg'> New Product</span>
							)}
							<h1 className='font-bold uppercase text-2xl w-1/2 text-center md:text-4xl lg:w-full lg:text-start'>
								{product.name}
							</h1>
							<p className='font-medium text-black-400 text-center leading-loose md:text-lg lg:text-start w-full'>
								{product.description}
							</p>
							<LinkButton href={`/products/${product.slug}`} text='See product' primary />
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default CategoryPage;
