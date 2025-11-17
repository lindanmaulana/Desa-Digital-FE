import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import type { IPagination } from '@/types/response.types';
import { useMemo } from 'react';

interface PageFilterProps {
	pagination: IPagination;
}
export const PageFilter = ({ pagination }: PageFilterProps) => {
	const {isPrevDisabled, isNextDisabled, isActive, links} = useMemo(() => {
		const isPrevDisabled = pagination.prev_page;
		const isNextDisabled = pagination.next_page;
		const isActive = pagination.current_page;
		const links = pagination.links;

		return {isPrevDisabled, isNextDisabled, isActive, links}
	}, [pagination.links, pagination.prev_page, pagination.next_page, pagination.current_page]);

	return (
		<div className="fixed bottom-7">
			<Pagination>
				<PaginationContent className="space-x-2">
					<PaginationItem>
						<PaginationPrevious className={cn(!isPrevDisabled && 'pointer-events-none opacity-50 cursor-not-allowed', 'size-12 rounded-full bg-village-forshadow')} />
					</PaginationItem>

					{links.map((link, i) => (
						<PaginationItem key={`${link}-${i}`}>
							<PaginationLink href="/dashboard" className={cn(isActive ? 'bg-village-dark-green hover:bg-village-dark-green hover:text-village-forshadow' : 'hover:bg-village-dark-green', 'size-10 rounded-full  text-village-forshadow')}>
								{link}
							</PaginationLink>
						</PaginationItem>
					))}

					<PaginationItem>
						<PaginationNext className={cn(!isNextDisabled && 'pointer-events-none opacity-50 cursor-not-allowed', 'size-12 rounded-full bg-village-forshadow')} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};
