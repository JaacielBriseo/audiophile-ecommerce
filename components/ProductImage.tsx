'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import { CategoryImage } from '@/types';
import Image from 'next/image';

interface Props {
	image: CategoryImage;
	alt: string;
}
export const ProductImage = ({ image, alt }: Props) => {
	const { width } = useWindowSize();

	let imageToShow: string;

	if (width && width < 768) {
		imageToShow = image.mobile;
	} else if (width && width > 768) {
		imageToShow = image.tablet;
	} else if (width && width > 1024) {
		imageToShow = image.desktop;
	} else {
		imageToShow = image.desktop;
	}

	return <Image src={imageToShow} alt={alt} fill />;
};
