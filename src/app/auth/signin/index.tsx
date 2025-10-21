import { Button, Form, Image, Input } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { SigninSchema, type TypeSigninSchema } from '../../../libs/validation/auth.validation';
import { ContainerAuth } from '../components/AuthContainer';

const SigninAuthPage = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<TypeSigninSchema>({
		resolver: zodResolver(SigninSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const handleForm = handleSubmit((value) => {
		console.log({ value });
	});

	return (
		<ContainerAuth title="Halo🙌🏻 , Selamat Datang!" message="Silahkan masuk untuk melanjutkan">
			<Form onSubmit={handleForm} className="space-y-6">
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							isRequired
							isInvalid={!!errors.email}
							errorMessage={errors.email?.message}
							label="Email Address"
							labelPlacement="outside"
							name="email"
							placeholder="Masukan Email Kamu"
							type="email"
							startContent={<Image src="/images/icons/user-secondary-green.svg" />}
							classNames={{
								label: '!text-desa-dark-green font-bold',
								inputWrapper: [
									'group-data-[focus-visible=true]:ring-0',
									'group-data-[focus=true]:border-desa-dark-green',
									'group-data-[focus=true]:border-2', //
								],
							}}
							variant="flat"
							size="lg"
						/>
					)}
				/>

				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							isRequired
							isInvalid={!!errors.password}
							errorMessage={errors.password?.message}
							label="Password"
							labelPlacement="outside"
							name="password"
							placeholder="Ketik Password Kamu"
							type="password"
							startContent={<Image src="/images/icons/key-secondary-green.svg" />}
							classNames={{
								label: "!text-desa-dark-green font-bold",
								inputWrapper: [
									'group-data-[focus-visible=true]:ring-0',
									'group-data-[focus=true]:border-desa-dark-green',
									'group-data-[focus=true]:border-2', //
								],
							}}
							variant="flat"
							size="lg"
						/>
					)}
				/>
				<Button type="submit" className="w-full font-semibold text-white bg-desa-dark-green" size="lg">
					Masuk
				</Button>
			</Form>
		</ContainerAuth>
	);
};

export default SigninAuthPage;
