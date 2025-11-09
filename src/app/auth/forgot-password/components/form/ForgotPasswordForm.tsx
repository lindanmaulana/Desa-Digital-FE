import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import type { TypeForgotPasswordSchema } from '@/lib/validation/auth.validation';
import type { AuthFormSubmissingProps } from '@/types/auth/auth.types';
import { Mail } from 'lucide-react';
import { Link } from 'react-router';

export const ForgotPasswordForm = ({ formMethods, handleForm, isPending }: AuthFormSubmissingProps<TypeForgotPasswordSchema>) => {
	const { control } = formMethods;
	return (
		<Form {...formMethods}>
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

				<Button type="submit" className="w-full text-base font-semibold text-white cursor-pointer py-7 bg-village-dark-green rounded-2xl hover:bg-village-dark-green/80" size="lg" disabled={isPending}>
					{isPending ? <Spinner /> : 'Kirim'}
				</Button>
			</form>
		</Form>
	);
};
