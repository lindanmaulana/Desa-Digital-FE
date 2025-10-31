import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputGroup } from '@/components/ui/input-group';
import { InputOTP, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Spinner } from '@/components/ui/spinner';
import type { TypeVerifyAccountSchema } from '@/lib/validation/auth.validation';
import type { AuthFormSubmissingProps } from '@/types/auth.types';
import { ResendOtp } from '../ResendOtp';


export const VerifyAccountAuthForm = ({formMethods, handleForm, isPending}: AuthFormSubmissingProps<TypeVerifyAccountSchema>) => {
	const {control} = formMethods

	return (
			<Form {...formMethods}>
				<form onSubmit={handleForm}>
					<div className="flex flex-col items-center justify-center gap-10">
						<FormField
							control={control}
							name="token"
							render={({ field }) => (
								<FormItem className="hidden">
									<FormControl>
										<Input {...field} type="text" />
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
							<Button type="submit" className="w-[75%] py-6 bg-village-dark-green rounded-2xl text-base hover:bg-village-dark-green/80 cursor-pointer" disabled={isPending}>
								{isPending ? <Spinner /> : 'Verify'}
							</Button>
							<ResendOtp />
						</div>
					</div>
				</form>
			</Form>
	)
}
