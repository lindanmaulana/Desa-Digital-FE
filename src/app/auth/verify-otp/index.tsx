import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputGroup } from '@/components/ui/input-group';
import { InputOTP, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { AuthSchema, type TypeVerifyAccountSchema } from '@/lib/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ContainerAuth } from '../components/AuthContainer';
import { useGetUsermail } from '../hooks/useGetUserMail';

const VerifyOtpAuthPage = () => {
	const emailUser = useGetUsermail();

	const form = useForm<TypeVerifyAccountSchema>({
		resolver: zodResolver(AuthSchema.VERIFYACCOUNTSCHEMA),
		defaultValues: {
			email: emailUser ?? '',
			otp_code: '',
		},
	});

	const { handleSubmit, control } = form;

	const handleForm = handleSubmit((value) => {
		console.log({ value });
	});

	return (
		<ContainerAuth title="Verifikasi Kode OTP Anda" message="Masukan kode 6 digit yang baru saja kami kirimkan ke alamat email Anda">
			<Form {...form}>
				<form onSubmit={handleForm}>
					<div className="flex flex-col items-center justify-center gap-10">
						<FormField
							control={control}
							name="email"
							render={({ field }) => (
								<FormItem className="hidden">
									<FormControl>
										<Input {...field} type="email" />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={control}
							name="otp_code"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<InputOTP maxLength={6} {...field}>
											<InputGroup>
												<InputOTPSlot index={0} />
												<InputOTPSlot index={1} />
											</InputGroup>
											<InputOTPSeparator />
											<InputGroup>
												<InputOTPSlot index={2} />
												<InputOTPSlot index={3} />
											</InputGroup>
											<InputOTPSeparator />
											<InputGroup>
												<InputOTPSlot index={4} />
												<InputOTPSlot index={5} />
											</InputGroup>
										</InputOTP>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="flex flex-col items-center w-full space-y-1">
							<Button type="submit" className="w-[75%] py-6 bg-village-dark-green rounded-2xl text-base hover:bg-village-dark-green/80 cursor-pointer">
								Verify
							</Button>
							<Button type="button" variant={'link'} size={'sm'} className="text-sm cursor-pointer text-village-dark-green">
								Resend OTP
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</ContainerAuth>
	);
};

export default VerifyOtpAuthPage;
