import { CategoriesRoutes, CompanyOverview, Hero, TopProducts } from '@/components';

import { Product } from '@/types';

const getTopProducts = async () => {
	const response = await fetch('http://localhost:3000/api/products?top_products=true');
	if (!response.ok) {
		throw 'Problem fetching products';
	}
	return response.json();
};

export default async function Home() {
	const topProducts = (await getTopProducts()) as Product[];
	return (
		<main>
			<Hero />
			<div className='space-y-20 py-10 px-10 md:px-12 lg:px-24 xl:px-36'>
				<CategoriesRoutes />
				<TopProducts topProducts={topProducts} />
				<CompanyOverview />
			</div>
		</main>
	);
}
