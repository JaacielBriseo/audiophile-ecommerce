import { routes } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export const CategoriesRoutes = () => {
	return (
		<ul className='flex flex-col justify-between items-center space-y-16 py-20 md:flex-row md:space-y-0 md:gap-x-5'>
			{routes.map(({ href, label, image }) => {
				if (href === '/') return null;
				return (
					<li
						key={label}
						className='h-52 bg-white-400 w-full relative flex flex-col items-center justify-center rounded-lg'>
						<Image src={image!} alt={label} width={135} height={135} className='absolute -top-10' />
						<h1 className='text-lg font-bold'>{label}</h1>
						<Link
							href={href}
							className='text-black-400 absolute bottom-10 font-bold text-sm flex items-center space-x-2'>
							<p>SHOP</p>
							<Image src='/assets/shared/icon-arrow-right.svg' alt='Arrow Right' height={10} width={10} />
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
