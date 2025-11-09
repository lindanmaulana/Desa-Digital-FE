import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const LoadingProfile = () => {
	return (
		<div className="shrink-0 flex items-center gap-4">
			<div className="size-14">
				<Skeleton className="w-full h-full rounded-full" />
			</div>
			<div className="space-y-2">
				<Skeleton className="w-24 h-4" />
				<Skeleton className="w-20 h-4" />
			</div>
			<Button variant={'ghost'} className="size-14">
				<img src="/images/icons/logout-red.svg" alt="Logout" className="size-full" />
			</Button>
		</div>
	);
};
