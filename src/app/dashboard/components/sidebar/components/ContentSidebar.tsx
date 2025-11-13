import { Link } from 'react-router';

interface PathUrl {
	id: number;
	title: string;
	url: string;
	icon: string;
	iconActive: string;
}
const items: PathUrl[] = [
	{
		id: 1,
		title: 'Dashboard',
		url: '',
		icon: 'chart-square-secondary-green.svg',
		iconActive: 'chart-square-dark-green.svg',
	},
	{
		id: 2,
		title: 'Kepala Rumah',
		url: '/head-of-family?page=1&limit=5',
		icon: 'crown-dark-green.svg',
		iconActive: 'crown-secondary-green.svg',
	},
];

interface ContentAppSidebarProps {
	pathname: string;
}

export const ContentSidebar = ({ pathname }: ContentAppSidebarProps) => {
	
	const getActiveRoute = (route: string) => {
		const cleanPathname = pathname.split('?')[0];
		const cleanRoute = route.split('?')[0];
		const exactMatchRoutes = ['/dashboard'];

		if (exactMatchRoutes.includes(cleanRoute)) return cleanPathname === cleanRoute;

		return cleanPathname === cleanRoute || cleanPathname.startsWith(cleanRoute + '/');
	};

	return (
		<ul className="space-y-2">
			{items.map((item) => (
				<li key={item.id}>
					<Link to={`/dashboard${item.url}`} className={`${getActiveRoute(`/dashboard${item.url}`) && 'bg-village-forshadow'} w-full h-full p-4 text-[16px] font-medium rounded-xl flex items-center gap-2 hover:bg-village-forshadow`}>
						<img src={`/images/icons/${getActiveRoute(`/dashboard${item.url}`) ? item.iconActive : item.icon}`} className="size-6 object-contain" />
						<span className={`${getActiveRoute(`/dashboard${item.url}`) ? 'text-village-dark-green' : 'text-village-secondary'} hover:text-village-dark-green`}>{item.title}</span>
					</Link>
				</li>
			))}
			<li></li>
		</ul>
	);
};
