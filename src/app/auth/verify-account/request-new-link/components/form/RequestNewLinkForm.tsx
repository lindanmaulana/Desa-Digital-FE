import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import type { TypeResendTokenVerifyTokenSchema } from '@/lib/validation/auth.validation';
import type { AuthFormSubmissingProps } from '@/types/auth.types';
import { Mail } from 'lucide-react';

export const RequestNewLinkForm = ({formMethods, handleForm, isPending}: AuthFormSubmissingProps<TypeResendTokenVerifyTokenSchema>) => {
	const {control} = formMethods

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

					<Button type="submit" className="w-full text-base font-semibold text-white cursor-pointer py-7 bg-village-dark-green rounded-2xl hover:bg-village-dark-green/80" size="lg">
						{isPending ? <Spinner /> : 'Kirim'}
					</Button>
				</form>
			</Form>
	)
}
