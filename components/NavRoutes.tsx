'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { routes } from '@/utils';

export const NavRoutes = () => {
	const pathname = usePathname();
	return (
		<>
			{routes.map(({ href, label }) => (
				<Link
					key={label}
					href={href}
					className={clsx('text-sm', pathname === href ? 'text-orange-600' : 'text-white-100')}>
					{label}
				</Link>
			))}
		</>
	);
};
