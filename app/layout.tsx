import { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';

import './globals.css';
const inter = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Audiophile Ecommerce',
	description: 'This is a challenge from https://www.frontendmentor.io/home',
	keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Frontend Mentor'],
	authors: {
		name: 'Jaaciel Briseño',
	},
	creator: 'JaacielBriseo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
