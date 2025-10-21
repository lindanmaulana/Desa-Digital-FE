import { Card, CardBody, CardHeader, Image } from '@heroui/react';
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
				<CardHeader className="flex flex-col gap-8">
					<Image alt="Desa Digital" src="/images/logos/logo-text.svg" width={300} className="w-full h-full" />
					<div className="space-y-1 text-center">
						<h2 className="text-2xl font-semibold">{title}</h2>
						<p className="text-gray-500">{message}</p>
					</div>
				</CardHeader>
				<CardBody className="space-y-8">
					{children}
				</CardBody>
			</Card>
		</div>
	)
}
