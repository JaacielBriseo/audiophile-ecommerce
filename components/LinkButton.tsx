import clsx from 'clsx';
import Link from 'next/link';

interface Props {
	href: string;
	text: string;
	primary?: boolean;
}
export const LinkButton = ({ href, text, primary }: Props) => {
	return (
		<Link
			href={href}
			className={clsx(
				'text-center uppercase px-6 py-4',
				primary &&
					'bg-orange-600 text-white-100 font-medium tracking-wider hover:bg-orange-300 hover:text-white-400 transition duration-150'
			)}>
			{text}
		</Link>
	);
};
