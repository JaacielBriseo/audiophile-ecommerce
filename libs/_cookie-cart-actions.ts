'use server';
import { ProductInCart } from '@/types';
import { cookies } from 'next/headers';
import products from '@/data/data.json';

export const getProductsInCart = (): ProductInCart[] => {
	const cookiesStore = cookies();
	const cartInCookies = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number };
	const productsInCart: ProductInCart[] = [];

	for (const id of Object.keys(cartInCookies)) {
		const product = products.find(prod => prod.id === id);
		if (product) {
			productsInCart.push({ product: product, quantity: cartInCookies[id] });
		}
	}

	return productsInCart;
};

export const removeAllProductsInCart = () => {
	const cookiesStore = cookies();
	cookiesStore.set('cart', JSON.stringify({}));
};
