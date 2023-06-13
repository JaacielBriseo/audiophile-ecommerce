import { routes } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className='bg-black-900 w-full flex flex-col justify-center items-center space-y-10 md:items-start py-10 px-10 md:px-12 lg:px-24 xl:px-36'>
			<div
				id='titulo y rutas'
				className='md:space-y-10 lg:flex lg:items-center lg:space-y-0 lg:justify-between lg:w-full'>
				<Image src={'/assets/shared/logo.svg'} alt='Logo' width={0} height={0} className='w-36 mx-auto md:mx-0' />
				<div className='flex flex-col items-center justify-center space-y-5 mt-5 md:flex-row md:space-y-0 md:space-x-5'>
					{routes.map(({ href, label }) => (
						<Link key={href} href={href} className='font-bold text-white-100 hover:text-orange-600'>
							{label}
						</Link>
					))}
				</div>
			</div>
			<div id='texto' className='lg:w-1/2'>
				<p className='text-center tracking-wider leading-relaxed text-black-400 md:text-start'>
					Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and
					sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
					facility - we’re open 7 days a week.
				</p>
			</div>
			<div
				id='redessociales'
				className='space-y-10 md:flex md:items-center md:justify-between md:space-y-0 md:w-full lg:-space-y-28'>
				<p className='text-center tracking-wider leading-relaxed text-black-400'>Copyright 2021. All Rights Reserved</p>
				<div className='flex items-center justify-center space-x-5'>
					<Image
						src={'/assets/shared/icon-facebook.svg'}
						alt='Facebook Logo'
						width={0}
						height={0}
						className='w-6 h-6'
					/>
					<Image src={'/assets/shared/icon-twitter.svg'} alt='Twitter Logo' width={0} height={0} className='w-6 h-6' />
					<Image
						src={'/assets/shared/icon-instagram.svg'}
						alt='Instagram Logo'
						width={0}
						height={0}
						className='w-6 h-6'
					/>
				</div>
			</div>
		</footer>
	);
};
