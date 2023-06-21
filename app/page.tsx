import { CategoriesRoutes, CompanyOverview, Hero, TopProducts } from '@/components';
import { getTopProducts } from '@/libs/fakeDb';

export default async function Home() {
	const topProducts = await getTopProducts();
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
