import { Product } from '@/types';
import Image from 'next/image';
import { LinkButton } from './LinkButton';

interface Props {
	topProducts: Product[];
}
export const TopProducts = ({ topProducts }: Props) => {
	const order: Record<string, number> = {
		'ZX9 Speaker': 1,
		'ZX7 Speaker': 2,
		'YX1 Wireless Earphones': 3,
	};
	const [zx9, zx7, yx1] = topProducts.sort((prodA, prodB) => order[prodA.name] - order[prodB.name]);
	return (
		<section className='flex flex-col gap-10'>
			<div className='flex flex-col lg:flex-row relative h-[600px] md:h-[720px] lg:h-[560px] overflow-hidden rounded-lg bg-circlesPattern bg-top bg-contain bg-no-repeat bg-orange-600 md:bg-[length:1000px_1000px] md:bg-[center_top_-20rem] lg:bg-[left_top_-3rem]'>
				<div className='h-1/2 w-full flex items-center justify-center lg:h-auto lg:w-1/2 lg:relative lg:items-end lg:justify-end lg:pr-10'>
					<Image
						src='/assets/home/mobile/image-speaker-zx9.png'
						alt='ZX9 Speaker'
						width={172}
						height={207}
						className='lg:w-[380px] lg:h-[450px] lg:absolute lg:-bottom-5'
					/>
				</div>
				<div className='h-1/2 w-full flex flex-col items-center justify-evenly px-5 md:h-auto md:space-y-3 lg:justify-center lg:items-start lg:pl-20 lg:w-auto'>
					<h1 className='text-white-100 font-semibold text-4xl w-1/2 uppercase text-center md:text-6xl lg:text-start'>
						{zx9.name}
					</h1>
					<p className='text-white-200 text-center md:text-center md:w-1/2 md:leading-loose md:text-lg lg:text-start lg:w-6/12 lg:tracking-widest'>
						Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
					</p>
					<LinkButton href={`/products/${zx9.slug}`} text='See product' tertiary className='lg:self-start' />
				</div>
			</div>
			<div className='bg-homeZx7Mobile md:bg-homeZx7Tablet lg:bg-homeZx7Desktop bg-cover h-[320px] flex flex-col justify-center rounded-lg px-5 md:px-16 space-y-5'>
				<h1 className='text-black-900 text-3xl font-bold tracking-wider'>{zx7.name}</h1>
				<LinkButton
					href={`/products/${zx7.slug}`}
					text='See product'
					secondary
					className='w-[170px] py-2 text-center font-semibold border-2'
				/>
			</div>
			<div className=' flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5'>
				<div className='bg-homeYx1Mobile h-[200px] md:h-[320px] bg-cover rounded-lg md:w-full' />
				<div className='h-[200px] md:h-[320px] md:w-full flex flex-col justify-center bg-white-400 rounded-lg px-5 space-y-5 md:items-center'>
					<h1 className='text-black-900 text-3xl font-bold'>{yx1.name.replace('Wireless', '')}</h1>
					<LinkButton
						href={`/products/${yx1.slug}`}
						text='See product'
						secondary
						className='w-[170px] py-2 text-center font-semibold border-2'
					/>
				</div>
			</div>
		</section>
	);
};
