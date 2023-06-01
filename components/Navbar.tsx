import Image from 'next/image';
import { NavRoutes } from './NavRoutes';
import { MobileMenu } from './MobileMenu';
export const Navbar = () => {
	return (
		<nav className='bg-black-900 flex justify-between items-center h-24 py-2 px-5 md:px-9 lg:px-5'>
			<div className='flex md:space-x-10 md:items-center'>
				<MobileMenu />
				<Image src='/assets/shared/logo.svg' alt='Logo' width={0} height={0} className='hidden md:block w-36' />
			</div>
			<div className='hidden lg:flex items-center justify-center w-full space-x-5'>
				<NavRoutes />
			</div>
			<Image src='/assets/shared/logo.svg' alt='Logo' width={0} height={0} className='w-36 md:hidden' />
			<Image src='/assets/shared/icon-cart.svg' alt='Cart' width={0} height={0} className='w-6 h-6' />
		</nav>
	);
};
