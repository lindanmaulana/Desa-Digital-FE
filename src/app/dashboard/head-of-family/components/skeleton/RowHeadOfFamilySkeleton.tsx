import { Skeleton } from '@/components/ui/skeleton';

export const RowHeadOfFamilySkeleton = () => {
	return (
		<>
			{Array.from({ length: 5 }).map((_, i) => (
				<div key={i} className="flex items-center justify-between bg-white p-6 rounded-3xl">
					<div className="flex items-center gap-4">
						<Skeleton className="size-14 rounded-full" />
						<div className="space-y-1">
							<Skeleton className="w-34 h-4" />
							<Skeleton className="w-24 h-4" />
						</div>
					</div>

					<div className="space-y-1">
						<Skeleton className="w-14 h-4" />
						<Skeleton className="w-44 h-4" />
					</div>

					<Skeleton className="w-52 h-12 rounded-full " />
					<Skeleton className="w-30 h-14 rounded-xl" />
				</div>
			))}
		</>
	);
};
