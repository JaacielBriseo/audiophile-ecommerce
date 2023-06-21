import Link from 'next/link';
import clsx from 'clsx';

interface Props {
	href: string;
	text: string;
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	className?: string;
}
export const LinkButton = ({ className, href, text, primary, secondary, tertiary }: Props) => {
	return (
		<Link
			href={href}
			className={clsx(
				'text-center uppercase px-6 py-4 font-medium tracking-wider transition duration-150',
				className,
				primary && 'bg-orange-600 text-white-100 hover:bg-orange-300 hover:text-white-400 ',
				secondary && 'bg-transparent border text-black-900 hover:bg-black-900 hover:text-white-400 ',
				tertiary && 'bg-black-900 text-white-100 hover:bg-black-600 hover:text-white-200'
			)}>
			{text}
		</Link>
	);
};
