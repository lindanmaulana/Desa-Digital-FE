import { Button } from '@/components/ui/button';

export const SortFilter = () => {
	return (
		<Button className="bg-white hover:bg-white/70 border-none px-8 py-7 rounded-xl text-base text-black cursor-pointer">
			<img src="/images/icons/filter-black.svg" alt="Sort Filter" className='shrink-0' />
			<span>Filter</span>
		</Button>
	);
};
