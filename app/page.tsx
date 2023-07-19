
import { TopProducts } from '@/components/product/TopProducts';
import { CategoriesRoutes } from '@/components/shared/CategoriesRoutes';
import { CompanyOverview } from '@/components/shared/CompanyOverview';
import { Hero } from '@/components/shared/Hero';
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
