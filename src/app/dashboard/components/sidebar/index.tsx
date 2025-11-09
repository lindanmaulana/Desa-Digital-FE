import { useLocation } from 'react-router';
import { ContentSidebar } from './components/ContentSidebar';

export const Sidebar = () => {
	const location = useLocation();

	console.log(location);
	return (
		<aside className="relative flex w-[280px] shrink-0 min-h-screen bg-white border overflow-hidden">
			<div className="fixed top-0 h-full w-[280px] flex shrink-0 flex-1 z-20 bg-white">
				<div className="w-full h-full flex flex-col gap-6 pt-[30px] px-6">
					<div className="flex items-center gap-2">
						<img src="/images/logos/logo-icon.svg" />
						<h2 className="text-2xl font-semibold">Desa Kita.</h2>
					</div>

					<div className="flex flex-col flex-1 gap-6 overflow-y-scroll hide-scrollbar">
						<nav className='space-y-2'>
							<div>Main Menu</div>
							<ContentSidebar pathname={location.pathname} />
						</nav>
					</div>
				</div>
			</div>
		</aside>
	);
};
