import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ContainerAuth } from '../components/AuthContainer';
import { useForm } from 'react-hook-form';
import { AuthSchema, type TypeForgotPasswordSchema } from '@/libs/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const ForgotPasswordAuthPage = () => {
	const form = useForm<TypeForgotPasswordSchema>({
		resolver: zodResolver(AuthSchema.FORGOTPASSWORD),
		defaultValues: {
			email: '',
		},
	});

	const { handleSubmit, control } = form;

	const handleForm = handleSubmit((value) => {
		console.log({value})
	})

	return (
		<ContainerAuth title="Lupa Kata Sandi" message="Masukan alamat email yang terkait dengan Akun anda untuk menerima tautan reset">
			<Form {...form}>
				<form onSubmit={handleForm} className="space-y-6">
					<FormField
						control={control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base font-medium text-village-dark-green">Email Address</FormLabel>
								<FormControl>
									<InputGroup className="border-none h-14 ring-village-dark-green rounded-2xl">
										<InputGroupInput {...field} type="email" placeholder={'Masukan alamat email anda'} className="!text-lg placeholder:text-base placeholder:text-village-secondary placeholder:font-medium" />

										<InputGroupAddon>
											<Mail className="size-6" />
										</InputGroupAddon>
									</InputGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex items-center justify-end">
						<Link to={'/auth/signin'} className="text-sm text-village-secondary font-medium hover:text-village-secondary/80">
							Kembali login
						</Link>
					</div>

					<Button type="submit" className="w-full text-base font-semibold text-white cursor-pointer py-7 bg-village-dark-green rounded-2xl hover:bg-village-dark-green/80" size="lg">
						Kirim
					</Button>
				</form>
			</Form>
		</ContainerAuth>
	);
};

export default ForgotPasswordAuthPage;
