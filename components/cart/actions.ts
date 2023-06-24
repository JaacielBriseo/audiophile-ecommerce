import { Product, ProductInCart } from '@/types';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import products from '@/data/data.json';
export const getCookieCart = (): { [id: string]: number } => {
	if (hasCookie('cart')) {
		const cookieCart = JSON.parse((getCookie('cart') as string) ?? '{}');
		return cookieCart;
	}

	return {};
};

export const addProductToCart = ({ id }: Product, quantity: number) => {
	const cookieCart = getCookieCart();
	console.log({ cookieCart });
	if (cookieCart[id]) {
		cookieCart[id] = cookieCart[id] + quantity;
	} else {
		cookieCart[id] = quantity;
	}

	setCookie('cart', JSON.stringify(cookieCart));
};

export const getCookieCartProducts = (): ProductInCart[] => {
	const productsInCart: ProductInCart[] = [];
	const cart = getCookieCart();
	for (const id of Object.keys(cart)) {
		const product = products.find(prod => prod.id === Number(id));
		if (product) {
			productsInCart.push({ ...product, quantity: cart[id] });
		}
	}

	return productsInCart;
};
