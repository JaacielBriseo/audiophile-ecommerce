import { type Metadata } from 'next';
import { getAllProducts, getProductBySlug } from '@/libs/fakeDb';
import { ProductCard, ProductFeaturesAndBox, ProductGallery, ProductRelated } from '@/components';

interface Props {
	params: { slug: string };
}

// //! Build time
// export async function generateStaticParams() {
// 	const products = await getAllProducts();
// 	const staticProducts = products.map(product => ({
// 		slug: product.slug,
// 	}));

// 	return staticProducts.map(({ slug }) => ({
// 		slug,
// 	}));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
// 	try {
// 		const { id, name, new: isNew } = await getProductBySlug(params.slug);

// 		return {
// 			title: `#${id} - Product:${name}`,
// 			description: `Product page for ${name} ${isNew ? '- New product' : ''}`,
// 		};
// 	} catch (error) {
// 		return {
// 			title: 'Product Page',
// 			description: 'Product Description.',
// 		};
// 	}
// }

const ProductBySlugPage = async ({ params: { slug } }: Props) => {
	const product = await getProductBySlug(slug);
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
