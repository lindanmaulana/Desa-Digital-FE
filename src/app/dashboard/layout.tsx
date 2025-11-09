import { Outlet } from 'react-router';
import { HeaderMainContainer } from './components/main-container/header/index';
import { Sidebar } from '@/app/dashboard/components/sidebar/index';

const DashboardLayout = () => {
	return (
		<main className="flex flex-1 gap-3">
			<Sidebar />
			<section className="flex-1 bg-[#F2F9F6]">
				<HeaderMainContainer />
				<Outlet />
			</section>
		</main>
	);
};

export default DashboardLayout;
