import { CustomInputGroup } from '@/components/CustomInputGroup';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Spinner } from '@/components/ui/spinner';
import type { TypeSigninSchema } from '@/lib/validation/auth.validation';
import type { AuthFormSubmissingProps } from '@/types/auth/auth.types';
import { KeyRound, User2 } from 'lucide-react';
import { Link } from 'react-router';


export const SigninForm = ({formMethods, handleForm, isPending}: AuthFormSubmissingProps<TypeSigninSchema>) => {
	const {control} = formMethods

	return (
		<Form {...formMethods}>
				<form onSubmit={handleForm} className="space-y-6">
					<FormField
						name="email"
						control={control}
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel className="text-base font-medium text-village-secondary">Email Address</FormLabel>
								<FormControl>
									<CustomInputGroup field={field} icon={User2} type='email' placeholder='Masukan Email Kamu'  />
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
									<CustomInputGroup field={field} icon={KeyRound} type='password' placeholder='Ketik Password Kamu' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex items-center justify-end">
						<Link to={'/auth/forgot-password'} className="text-sm text-village-secondary font-medium hover:text-village-secondary/80">
							Lupa Sandi
						</Link>
					</div>

					<Button type="submit" className="w-full text-base font-semibold text-white cursor-pointer py-7 bg-village-dark-green rounded-2xl hover:bg-village-dark-green/80" size="lg" disabled={isPending}>
						{isPending ? <Spinner /> : 'Masuk'}
					</Button>
				</form>
			</Form>
	)
}
