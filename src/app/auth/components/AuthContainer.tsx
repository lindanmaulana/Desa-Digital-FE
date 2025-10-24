import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { ReactNode } from 'react';


interface ContainerAuthProps {
	title?: string
	message?: string
	children: ReactNode
}
export const ContainerAuth = ({title, message, children}: ContainerAuthProps) => {
	return (
		<div className="flex items-center justify-center flex-1 p-[calc(((100%-1280px)/2)+75px)]">
			<Card className="w-[486px] h-fit shrink-0 bg-white rounded-3xl p-8 space-y-8">
				<CardHeader className="flex flex-col items-center gap-8">
					<img alt="Desa Digital" src="/images/logos/logo-text.svg" width={200} className="" />
					<div className="space-y-1 text-center">
						<h2 className="text-2xl font-semibold">{title}</h2>
						<p className="font-medium text-village-secondary">{message}</p>
					</div>
				</CardHeader>
				<CardContent className="p-0 space-y-8">
					{children}
				</CardContent>
			</Card>
		</div>
	)
}
