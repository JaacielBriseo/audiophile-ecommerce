import { NextResponse } from 'next/server';
import products from '@/data/data.json';
import { Product } from '@/types';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const isTopSearch = searchParams.get('top_products');
	if (isTopSearch) {
		const topProducts: Product[] = products.filter(product => product.isTop);

		return NextResponse.json(topProducts);
	}
	return NextResponse.json(products);
}
