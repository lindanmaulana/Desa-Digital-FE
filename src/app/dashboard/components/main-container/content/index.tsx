import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

interface ContentMainContainerProps {
	children: ReactNode;
	title: string;
}
export const ContentMainContainer = ({ children, title }: ContentMainContainerProps) => {
	return (
		<div className="p-6 space-y-8">
			<div className="flex items-center justify-between">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<Button size={'lg'} className="bg-village-dark-green px-6 py-7 rounded-xl text-base space-x-px">
					<img src="/images/icons/add-square-white.svg" alt="add action" />
					<span>Add New</span>
				</Button>
			</div>

			{children}
		</div>
	);
};
