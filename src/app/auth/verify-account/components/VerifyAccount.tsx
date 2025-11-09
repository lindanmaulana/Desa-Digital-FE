import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { AuthSchema, type TypeVerifyAccountSchema } from '@/lib/validation/auth.validation';
import type { VerifyAccountRequest } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useGetToken } from '../../hooks/useGetToken';
import { VerifyAccountAuthForm } from './form/VerifyAccountForm';
import { verifyAccountService } from '@/lib/services/auth/verify-account.service';

export const VerifyAccount = () => {
	const tokenUser = useGetToken();
	const router = useNavigate();

	const form = useForm<TypeVerifyAccountSchema>({
		resolver: zodResolver(AuthSchema.VERIFYACCOUNT_SCHEMA),
		defaultValues: {
			token: tokenUser ?? '',
			otp_code: '',
		},
	});

	const { handleSubmit } = form;

	const { mutate, isPending, reset } = useMutation({
		mutationKey: authKeys.verify_account(),
		mutationFn: (req: VerifyAccountRequest) => verifyAccountService.verify(req),
	});

	const handleForm = handleSubmit((value) => {
		mutate(value, {
			onSuccess: (data) => {
				customToastSuccess(data.message);
				reset();

				router('/auth/signin');
			},

			onError: (err: unknown) => {
				const errorMessage = errorHandler(err);
				console.log({ err, errorMessage });

				customToastError(errorMessage);

				if (errorMessage.endsWith('jwt expired')) router('/auth/verify-account/request-new-link');
			},
		});
	});

	return <VerifyAccountAuthForm formMethods={form} handleForm={handleForm} isPending={isPending} />;
};
