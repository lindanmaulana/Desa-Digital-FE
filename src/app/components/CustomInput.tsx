import { Input } from "@heroui/react";
// import {} from "@/"

interface CustominputProps {
	imageUrl?: string
	isRequired?: boolean
	errorMessage?: string
	labelPlacement: ""
}

export const Custominput = () => {
	return (
		<Input
			isRequired
			errorMessage=""
			label="Email Address"
			labelPlacement="outside"
			name="email"
			placeholder="Enter your email"
			type="email"
			// startContent={<Image src="/images/icons/user-secondary-green.svg" />}
			classNames={{
				label: 'text-desa-dark-green font-bold',
				inputWrapper: [
					'group-data-[focus-visible=true]:ring-0',
					'group-data-[focus=true]:border-desa-dark-green',
					'group-data-[focus=true]:border-2', //
				],
			}}
			variant="flat"
			size="lg"
		/>
	);
};
