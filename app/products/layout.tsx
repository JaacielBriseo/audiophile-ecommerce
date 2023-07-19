import { CategoriesRoutes } from "@/components/shared/CategoriesRoutes";
import { CompanyOverview } from "@/components/shared/CompanyOverview";
import { GoBackButton } from "@/components/shared/GoBackButton";


const ProductPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='space-y-12 py-10 px-10 md:px-12 lg:px-24 xl:px-36 relative'>
			<GoBackButton />
			{children}
			<CategoriesRoutes />
			<CompanyOverview />
		</div>
	);
};
export default ProductPageLayout;
