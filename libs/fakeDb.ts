import { notFound } from 'next/navigation';
import { Product } from '@/types';
import products from '@/data/data.json';

const sleep = (seconds: number) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, seconds * 1000);
	});
};

export const getTopProducts = async (): Promise<Product[]> => {
	await sleep(1);
	const topProducts = products.filter(product => product.isTop);
	return topProducts;
};

export const getCategoryProducts = async (category: string): Promise<Product[]> => {
	await sleep(1);

	const productsByCategory = products.filter(product => product.category.includes(category));

	const sortedProductsByNew = productsByCategory.sort((prodA, prodB) => {
		if (prodA.new && !prodB.new) {
			return -1;
		} else if (!prodA.new && prodB.new) {
			return 1;
		} else {
			return 0;
		}
	});

	return sortedProductsByNew;
};

export const getProductBySlug = async (slug: string): Promise<Product> => {
	await sleep(1);
	const product = products.find(product => product.slug === slug);

	if (!product) {
		notFound();
	}
	return product;
};

export const getAllProducts = async (): Promise<Product[]> => {
	await sleep(1);
	return products;
};
