import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { errorHandler } from '@/lib/helpers/error-handler.helper';
import queries from '@/lib/queries';
import services from '@/lib/services';
import type { signinAuthRequest, signinAuthResponse } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { User2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { AuthSchema, type TypeSigninSchema } from '../../../lib/validation/auth.validation';
import { ContainerAuth } from '../components/AuthContainer';
import { toast } from 'sonner';
import customToast from '@/components/custom-toast';
import { Spinner } from '@/components/ui/spinner';

const SigninAuthPage = () => {
	const router = useNavigate();

	const form = useForm<TypeSigninSchema>({
		resolver: zodResolver(AuthSchema.SIGNINSCHEMA),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { handleSubmit, control } = form;

	const { mutate, isPending, reset } = useMutation({
		mutationKey: queries.auth.authKeys.signin(),
		mutationFn: (req: signinAuthRequest) => services.authService.signinAuthService(req),
	});

	const handleForm = handleSubmit((value: signinAuthRequest) => {

		mutate(value, {
			onSuccess: (data) => {
				console.log({data})
				toast.success(data.message, {
					className: 'bg-green-500',
				});
				
				// router("/dashboard")
			},

			onError: (err) => {
				const errorMessage = errorHandler(err);

				customToast.CustomToastError(errorMessage);
			},

			onSettled: () => {
				reset();
			},
		});
	});

	return (
		<ContainerAuth title="Halo🙌🏻 , Selamat Datang!" message="Silahkan masuk untuk melanjutkan">
			<Form {...form}>
				<form onSubmit={handleForm} className="space-y-6">
					<FormField
						name="email"
						control={control}
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel className="text-base font-medium text-village-secondary">Email Address</FormLabel>
								<FormControl>
									<InputGroup className="border-none h-14 ring-village-dark-green rounded-2xl">
										<InputGroupInput {...field} placeholder="Masukan Email Kamu" className="!text-lg placeholder:text-base placeholder:text-village-secondary placeholder:font-medium" />
										<InputGroupAddon>
											<User2 className="size-6" />
										</InputGroupAddon>
									</InputGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name="password"
						control={control}
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel className="text-base font-medium text-village-secondary">Password</FormLabel>
								<FormControl>
									<InputGroup className="border-none h-14 ring-village-dark-green rounded-2xl">
										<InputGroupInput type="password" {...field} placeholder="Ketik Password Kamu" className="!text-lg placeholder:text-base placeholder:text-village-secondary placeholder:font-medium" />
										<InputGroupAddon>
											<img src="/images/icons/key-secondary-green.svg" alt="key-secondary" />
										</InputGroupAddon>
									</InputGroup>
								</FormControl>
							</FormItem>
						)}
					/>

					<div className="flex items-center justify-end">
						<Link to={'/auth/forgot-password'} className="text-sm text-village-secondary font-medium hover:text-village-secondary/80">
							Lupa Sandi
						</Link>
					</div>

					<Button type="submit" className="w-full text-base font-semibold text-white cursor-pointer py-7 bg-village-dark-green rounded-2xl hover:bg-village-dark-green/80" size="lg">
						{isPending ? <Spinner /> : 'Masuk'}
					</Button>
				</form>
			</Form>
		</ContainerAuth>
	);
};

export default SigninAuthPage;
