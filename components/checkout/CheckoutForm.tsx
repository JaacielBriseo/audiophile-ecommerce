'use client';
interface Props {
	children: React.ReactNode;
	className?: string;
}
export const CheckoutForm: React.FC<Props> = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};
