import { Product } from '@/types';
import { notFound } from 'next/navigation';

const getProduct = async (slug: string): Promise<Product> => {
	const response = await fetch(`http://localhost:3000/api/products/${slug}`);
	if (response.status === 404) {
		notFound();
	}
	return response.json();
};

const ProductBySlugPage = async ({ params: { slug } }: { params: { slug: string } }) => {
	const product = await getProduct(slug);
	return <div>ProductBySlugPage-{product.features}</div>;
};
export default ProductBySlugPage;
