import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import type { TypeResetPassword } from '@/lib/validation/auth.validation';
import type { AuthFormSubmissingProps } from '@/types/auth/auth.types';
import { LockKeyhole } from 'lucide-react';

export const ResetPasswordForm = ({ formMethods, handleForm, isPending }: AuthFormSubmissingProps<TypeResetPassword>) => {
	const { control } = formMethods;
	return (
		<Form {...formMethods}>
			<form onSubmit={handleForm} className="space-y-6">
				<FormField
					name="password"
					control={control}
					render={({ field }) => (
						<FormItem className="space-y-2">
							<FormLabel className="text-base font-medium text-village-secondary">New Password</FormLabel>
							<FormControl>
								<InputGroup className="border-none h-14 ring-village-dark-green rounded-2xl">
									<InputGroupInput type="password" {...field} placeholder="Masukan Kata sandi baru" className="!text-lg placeholder:text-base placeholder:text-village-secondary placeholder:font-medium" />
									<InputGroupAddon>
										<LockKeyhole className="size-6" />
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
						<FormItem className="space-y-2">
							<FormLabel className="text-base font-medium text-village-secondary">Confirm Password</FormLabel>
							<FormControl>
								<InputGroup className="border-none h-14 ring-village-dark-green rounded-2xl">
									<InputGroupInput type="password" {...field} placeholder="Konfirmasi password baru" className="!text-lg placeholder:text-base placeholder:text-village-secondary placeholder:font-medium" />
									<InputGroupAddon>
										<LockKeyhole className="size-6" />
									</InputGroupAddon>
								</InputGroup>
							</FormControl>
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full py-6 bg-village-dark-green rounded-2xl text-base hover:bg-village-dark-green/80 cursor-pointer" disabled={isPending}>
					{isPending ? <Spinner /> : 'Kirim'}
				</Button>
			</form>
		</Form>
	);
};
