import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { resendVerifyAccountService } from '@/lib/services/auth.service';
import { AuthSchema, type TypeResendVerifyTokenSchema } from '@/lib/validation/auth.validation';
import type { ResendVerifyAccountRequest } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { ContainerAuth } from '../components/AuthContainer';
import { RequestNewLinkForm } from './components/RequestNewLinkForm';

export const RequestNewLinkAuthPage = () => {
	const form = useForm<TypeResendVerifyTokenSchema>({
		resolver: zodResolver(AuthSchema.RESENDVERIFYTOKEN),
		defaultValues: {
			email: ""
		}
	})

	const {handleSubmit, reset} = form

	const {mutate, isPending} = useMutation({
		mutationKey: authKeys.resend_verify_token(),
		mutationFn: (req: ResendVerifyAccountRequest) => resendVerifyAccountService(req)
	})


	const handleForm = handleSubmit((value) => {
		mutate(value, {
			onSuccess: (data) => {
				customToastSuccess(data.message)

				reset()
			},

			onError: (err: unknown) => {
				const errorMessage = errorHandler(err)

				customToastError(errorMessage)
			}
		})
	})

	return (
		<ContainerAuth title="Token Expired" message="Jika kamu ingin melanjutkan untuk verifikasi akun anda, silahkan kirim ulang link verifikasinya">
			<RequestNewLinkForm formMethods={form} handleForm={handleForm} isPending={isPending}  />
		</ContainerAuth>
	);
};
