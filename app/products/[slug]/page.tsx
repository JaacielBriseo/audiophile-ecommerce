import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Product } from '@/types';
import { ProductCard, ProductFeaturesAndBox, ProductGallery, ProductRelated } from '@/components';
import products from '@/data/data.json';

interface Props {
	params: { slug: string };
}

//! Build time
export async function generateStaticParams() {
	const staticProducts = products.map(product => ({
		slug: product.slug,
	}));

	return staticProducts.map(({ slug }) => ({
		slug,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	try {
		const { id, name, new: isNew } = await getProduct(params.slug);

		return {
			title: `#${id} - Product:${name}`,
			description: `Product page for ${name} ${isNew ? '- New product' : ''}`,
		};
	} catch (error) {
		return {
			title: 'Product Page',
			description: 'Product Description.',
		};
	}
}

const getProduct = async (slug: string): Promise<Product> => {
	// const response = await fetch(`http://localhost:3000/api/products/${slug}`);

	// if (response.status === 404) {
	// 	notFound();
	// }
	// return response.json();
	const response = products.find(prod => prod.slug === slug);
	if (!response) {
		notFound();
	}
	return response;
};

const ProductBySlugPage = async ({ params: { slug } }: Props) => {
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
