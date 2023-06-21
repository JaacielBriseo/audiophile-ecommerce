import { LinkButton } from './';

export const Hero = () => {
	return (
		<section className='bg-heroMobile bg-cover bg-center bg-no-repeat h-[611px] md:bg-heroTablet lg:bg-heroDesktop lg:h-[700px]'>
			<div className='flex flex-col items-center justify-center gap-y-3 h-full w-10/12 mx-auto md:gap-y-5 lg:mx-0 lg:w-1/2'>
				<h3 className='uppercase text-black-400 tracking-widest text-lg md:text-xl'>new product</h3>
				<h1 className='uppercase text-white-100 font-bold text-4xl w-10/12 text-center leading-relaxed tracking-widest md:text-5xl'>
					XX99 Mark II Headphones
				</h1>
				<p className='text-black-200 text-center w-10/12 leading-relaxed tracking-widest mb-5 md:w-9/12 md:mt-3'>
					Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
				</p>
				<LinkButton href='/products/xx99-mark-two-headphones' text='see product' primary />
			</div>
		</section>
	);
};
