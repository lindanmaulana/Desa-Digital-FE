import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputGroup } from '@/components/ui/input-group';
import { InputOTP, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import type { TypeVerifyOtpForgotPasswordSchema } from '@/lib/validation/auth.validation';
import { ResendOtpForgotPassword } from '../../../resend-otp/ResendOtp';
import { Spinner } from '@/components/ui/spinner';
import type { AuthFormSubmissingProps } from '@/types/auth/auth.types';

export const VerifyOtpForm = ({formMethods, handleForm, isPending}: AuthFormSubmissingProps<TypeVerifyOtpForgotPasswordSchema>) => {
	const {control} = formMethods
	return (
		<Form {...formMethods}>
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
								<FormMessage />
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
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-col items-center w-full space-y-1">
						<Button type="submit" className="w-[75%] py-6 bg-village-dark-green rounded-2xl text-base hover:bg-village-dark-green/80 cursor-pointer" disabled={isPending}>
							{isPending ? <Spinner /> : "Verify"}
						</Button>
						<ResendOtpForgotPassword />
					</div>
				</div>
			</form>
		</Form>
	);
};
