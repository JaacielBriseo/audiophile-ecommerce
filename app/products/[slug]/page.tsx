import { notFound } from 'next/navigation';

import { ProductCard, ProductFeaturesAndBox, ProductGallery, ProductRelated } from '@/components';
import { Product } from '@/types';

const getProduct = async (slug: string): Promise<Product> => {
	const response = await fetch(`http://localhost:3000/api/products/${slug}`);
	if (response.status === 404) {
		notFound();
	}
	return response.json();
};

const ProductBySlugPage = async ({ params: { slug } }: { params: { slug: string } }) => {
	const product = await getProduct(slug);
	return (
		<>
			<ProductCard product={product} />
			<ProductFeaturesAndBox features={product.features} includes={product.includes} />
			<ProductGallery gallery={product.gallery} />
			<ProductRelated relatedProducts={product.others} />
		</>
	);
};
export default ProductBySlugPage;
