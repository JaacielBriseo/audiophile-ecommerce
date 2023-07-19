import { CategoriesRoutes } from "@/components/shared/CategoriesRoutes";
import { CompanyOverview } from "@/components/shared/CompanyOverview";



const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='space-y-20 py-10 px-10 md:px-12 lg:px-24 xl:px-36 relative'>
			{children}
			<CategoriesRoutes />
			<CompanyOverview />
		</div>
	);
};
export default CategoriesLayout;
