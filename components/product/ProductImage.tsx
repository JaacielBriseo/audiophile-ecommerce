'use client';

import Image, { ImageProps } from 'next/image';
import { useWindowSize } from '@/hooks/useWindowSize';
import { CategoryImage } from '@/types';

interface Props extends Omit<ImageProps,'src'> {
	image: CategoryImage;
}

export const ProductImage = ({ image, ...props }: Props) => {
	const { width } = useWindowSize();
	let imageToShow: string;

	if (width && width < 768) {
		imageToShow = image.mobile;
	} else if (width && width >= 768 && width < 1024) {
		imageToShow = image.tablet;
	} else if (width && width > 1024) {
		imageToShow = image.desktop;
	} else {
		imageToShow = image.desktop;
	}

	// eslint-disable-next-line jsx-a11y/alt-text
	return <Image src={imageToShow} {...props} />;
};
