import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { verifyAccountService } from '@/lib/services/auth/verifyAccount.service';
import { AuthSchema, type TypeResendTokenVerifyTokenSchema } from '@/lib/validation/auth.validation';
import type { ResendTokenVerifyAccountRequest } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { ContainerAuth } from '../../components/AuthContainer';
import { RequestNewLinkForm } from './components/form/RequestNewLinkForm';

export const RequestNewLinkAuthPage = () => {
	const router = useNavigate();
	const form = useForm<TypeResendTokenVerifyTokenSchema>({
		resolver: zodResolver(AuthSchema.RESEND_TOKEN_VERIFYACCOUNT_SCHEMA),
		defaultValues: {
			email: '',
		},
	});

	const { handleSubmit, reset } = form;

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.resend_verify_token(),
		mutationFn: (req: ResendTokenVerifyAccountRequest) => verifyAccountService.resendToken(req),
	});

	const handleForm = handleSubmit((value) => {
		mutate(value, {
			onSuccess: (data) => {
				customToastSuccess(data.message);
				reset();

				router('/auth/verify-account/request-new-link/success');
			},

			onError: (err: unknown) => {
				const errorMessage = errorHandler(err);

				customToastError(errorMessage);
			},
		});
	});

	return (
		<ContainerAuth title="Token Expired" message="Jika kamu ingin melanjutkan untuk verifikasi akun anda, silahkan kirim ulang link verifikasinya">
			<RequestNewLinkForm formMethods={form} handleForm={handleForm} isPending={isPending} />
		</ContainerAuth>
	);
};
