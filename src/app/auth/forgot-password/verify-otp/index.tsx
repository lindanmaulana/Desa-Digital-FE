import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { useGuardAuth } from '@/hooks';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { AuthSchema, type TypeVerifyOtpForgotPasswordSchema } from '@/lib/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { ContainerAuth } from '../../components/AuthContainer';
import { VerifyOtpForm } from './components/form/VerifyOtpForm';
import { forgotPasswordService } from '@/lib/services/auth/forgot-password.service';
import type { VerifyOtpForgotPasswordRequest } from '@/types/auth/forgot-password.types';

const VerifyhOtpAuthPage = () => {
	const {email} = useGuardAuth();
	const router = useNavigate()

	const form = useForm<TypeVerifyOtpForgotPasswordSchema>({
		resolver: zodResolver(AuthSchema.VERIFY_OTP_FORGOTPASSWORD_SCHEMA),
		defaultValues: {
			email: email ?? '',
			otp_code: '',
		},
	});

	const { handleSubmit } = form;

	const {mutate, isPending, reset} = useMutation({
		mutationKey: authKeys.forgot_password.verify_otp(),
		mutationFn: (req: VerifyOtpForgotPasswordRequest) => forgotPasswordService.verifyOtp(req)
	})

	const handleForm = handleSubmit((value) => {
		console.log({value})
		mutate(value, {
			onSuccess: (data) => {
				customToastSuccess(data.message)

				reset()
				router("/auth/forgot-password/verify-otp/success", {replace: true})
			},

			onError: (err) => {
				const errorMessage = errorHandler(err)

				customToastError(errorMessage)
			}
		})
	});

	return (
		<ContainerAuth title="Verifikasi Kode OTP Anda" message="Masukan kode 6 digit yang baru saja kami kirimkan ke alamat email Anda">
			<VerifyOtpForm formMethods={form} handleForm={handleForm} isPending={isPending} />
		</ContainerAuth>
	);
};

export default VerifyhOtpAuthPage;
