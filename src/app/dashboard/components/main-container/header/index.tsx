import { Button } from '@/components/ui/button';
import { Bell, Settings } from 'lucide-react';
import { ProfileHeader } from './profile';
import { SearchProfile } from './search';

export const HeaderMainContainer = () => {
	return (
		<section className="relative flex h-[116px] shrink-0 z-50">
			<div className="fixed top-0 w-[-webkit-fill-available] h-[116px] flex items-center gap-4 bg-white px-4">
				<SearchProfile />

				<Button variant={'ghost'} className="shrink-0 size-14 p-7 border hover:border-village-secondary hover:bg-transparent cursor-pointer rounded-xl">
					<Bell className="size-6 text-village-secondary" />
				</Button>
				<Button variant={'ghost'} className="shrink-0 size-14 p-7 border hover:border-village-secondary hover:bg-transparent cursor-pointer rounded-xl">
					<Settings className="size-6 text-village-secondary" />
				</Button>

				<ProfileHeader />
			</div>
		</section>
	);
};
