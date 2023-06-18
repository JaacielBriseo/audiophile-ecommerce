import { NextResponse } from 'next/server';
import products from '@/data/data.json';
export const GET = async (req: Request, { params }: { params: { category: string } }) => {
	console.log({ params });

	const productsByCategory = products.filter(product => product.category.includes(params.category));

	const sortedProductsByNew = productsByCategory.sort((prodA, prodB) => {
		if (prodA.new && !prodB.new) {
			return -1;
		} else if (!prodA.new && prodB.new) {
			return 1;
		} else {
			return 0;
		}
	});

	return NextResponse.json(sortedProductsByNew);
};
