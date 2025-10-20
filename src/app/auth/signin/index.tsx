import { Button, Card, CardBody, CardHeader, Form, Image, Input } from '@heroui/react';

const SigninAuthPage = () => {
	return (
		<Form className="flex items-center justify-center flex-1 p-[calc(((100%-1280px)/2)+75px)]">
			<Card className="w-[486px] h-fit shrink-0 bg-white rounded-3xl p-8 space-y-8">
				<CardHeader className="flex flex-col gap-8">
					<Image alt="Desa Digital" src="/images/logos/logo-text.svg" width={300} className="w-full h-full" />
					<div className="text-center space-y-1">
						<h2 className="text-2xl font-semibold">Halo🙌🏻 , Selamat Datang!</h2>
						<p className="text-gray-500">Silahkan masuk untuk melanjutkan</p>
					</div>
				</CardHeader>
				<CardBody className="space-y-8">
					<Input
						isRequired
						errorMessage=""
						label="Email Address"
						labelPlacement="outside"
						name="email"
						placeholder="Enter your email"
						type="email"
						startContent={<Image src="/images/icons/user-secondary-green.svg" />}
						classNames={{
							label: "text-desa-dark-green font-bold",
							inputWrapper: [
								'group-data-[focus-visible=true]:ring-0',
								'group-data-[focus=true]:border-desa-dark-green',
								'group-data-[focus=true]:border-2', //
							],
						}}
						variant="flat"
						size="lg"
					/>
					<Input
						isRequired
						errorMessage=""
						label="Email Address"
						labelPlacement="outside"
						name="email"
						placeholder="Enter your email"
						type="email"
						startContent={<Image src="/images/icons/key-secondary-green.svg" />}
						classNames={{
							inputWrapper: [
								'group-data-[focus-visible=true]:ring-0',
								'group-data-[focus=true]:border-desa-dark-green',
								'group-data-[focus=true]:border-2', //
							],
						}}
						variant="flat"
						size="lg"
					/>
					<Button className="bg-desa-dark-green font-semibold text-white" size="lg">
						Masuk
					</Button>
				</CardBody>
			</Card>
		</Form>
	);
};

export default SigninAuthPage;
