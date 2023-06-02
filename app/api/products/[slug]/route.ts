import products from '@/data/data.json';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
export async function GET(req: Request, ctx: { params: { slug: string } }) {
	const slug = ctx.params.slug;
	const product = products.find(product => product.slug === slug);

	if (!product) {
		notFound();
	}

	return NextResponse.json(product);
}
