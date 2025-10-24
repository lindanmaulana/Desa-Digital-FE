import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { LockKeyhole } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { AuthSchema, type TypeResetPassword } from '../../../libs/validation/auth.validation';
import { ContainerAuth } from '../components/AuthContainer';

const ResetPasswordAuthPage = () => {
	const form = useForm<TypeResetPassword>({
		resolver: zodResolver(AuthSchema.RESETPASSWORD),
		defaultValues: {
			password: "",
			confirm_password: ""
		},
	});

	const { handleSubmit, control } = form;

	const handleForm = handleSubmit((value) => {
		console.log({ value });
	});

	return (
		<ContainerAuth title="Reset🗝️ , Kata Sandi!" message="Identitas Anda telah diverifikasi! Tetapkan kata sandi baru Anda">
			<Form {...form}>
				<form onSubmit={handleForm} className='space-y-6'>
					<FormField
						name="password"
						control={control}
						render={({ field }) => (
							<FormItem className='space-y-2'>
								<FormLabel className='text-base font-medium text-village-secondary'>New Password</FormLabel>
								<FormControl>
									<InputGroup className='border-none h-14 ring-village-dark-green rounded-2xl'>
										<InputGroupInput type='password' {...field} placeholder='Masukan Email Kamu' className='!text-lg placeholder:text-base placeholder:text-village-secondary placeholder:font-medium' />
										<InputGroupAddon>
											<LockKeyhole className='size-6' />
										</InputGroupAddon>
									</InputGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name="confirm_password"
						control={control}
						render={({ field }) => (
							<FormItem className='space-y-2'>
								<FormLabel className='text-base font-medium text-village-secondary'>Confirm Password</FormLabel>
								<FormControl>
									<InputGroup className='border-none h-14 ring-village-dark-green rounded-2xl'>
										<InputGroupInput type='password' {...field} placeholder='Ketik Password Kamu' className='!text-lg placeholder:text-base placeholder:text-village-secondary placeholder:font-medium' />
										<InputGroupAddon>
											<LockKeyhole className='size-6' />
										</InputGroupAddon>
									</InputGroup>
								</FormControl>
							</FormItem>
						)}
					/>

					<div className='flex items-center justify-end'>
						<Link to={"/auth/forgot-password"} className='text-sm text-village-secondary font-medium hover:text-village-secondary/80' >Lupa Sandi</Link>
					</div>

					<Button type="submit" className="w-full text-base font-semibold text-white cursor-pointer py-7 bg-village-dark-green rounded-2xl hover:bg-village-dark-green/80" size="lg">
						Masuk
					</Button>
				</form>
			</Form>
		</ContainerAuth>
	);
};

export default ResetPasswordAuthPage;
