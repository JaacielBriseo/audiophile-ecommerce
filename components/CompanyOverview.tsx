export const CompanyOverview = () => {
	return (
		<section className='flex flex-col lg:flex-row-reverse lg:items-center'>
			<div className='bg-overviewMobile bg-cover bg-center bg-no-repeat w-full h-[300px] rounded-lg md:bg-overviewTablet lg:w-1/2 lg:h-[588px] lg:bg-overviewDesktop' />
			<div className='space-y-5 lg:w-1/2'>
				<h1 className='uppercase text-3xl font-bold text-center tracking-wide w-10/12 mx-auto mt-10 md:text-4xl lg:text-start lg:mx-0'>
					Bringing you the <span className='text-orange-600'>best</span> audio gear
				</h1>
				<p className='font-medium text-center tracking-wider text-black-800 lg:text-start lg:w-10/12'>
					Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
					speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
					browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
					make Audiophile the best place to buy your portable audio equipment.
				</p>
			</div>
		</section>
	);
};
