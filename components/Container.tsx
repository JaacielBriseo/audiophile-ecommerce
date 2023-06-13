import { PropsWithChildren } from 'react';

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className='space-y-20 px-10 md:px-12 lg:px-24 xl:px-36'>{children}</div>;
};
