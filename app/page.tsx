import { CategoriesRoutes } from '@/components/CategoriesRoutes';
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { TopProducts } from '@/components/TopProducts';
import { Product } from '@/types';

const getTopProducts = async () => {
	const response = await fetch('http://localhost:3000/api/products?top_products=true');
	if (!response.ok) {
		throw new Error('Problem fetching products');
	}
	return response.json();
};

export default async function Home() {
	const topProducts = (await getTopProducts()) as Product[];
	return (
		<main>
			<Hero />
			<Container>
				<CategoriesRoutes />
				<TopProducts topProducts={topProducts} />
			</Container>
		</main>
	);
}
