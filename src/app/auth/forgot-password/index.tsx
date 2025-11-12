import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { AuthSchema, type TypeForgotPasswordSchema } from '@/lib/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { ContainerAuth } from '../components/AuthContainer';
import { ForgotPasswordForm } from './components/form/ForgotPasswordForm';
import { useGuardAuth } from '@/hooks';
import { useNavigate } from 'react-router';
import { forgotPasswordService } from '@/lib/services/auth/forgotPassword.service';
import type { ForgotPasswordRequest } from '@/types/auth/forgot-password.types';

const ForgotPasswordAuthPage = () => {
	const { handleSetEmailSubmitted } = useGuardAuth();
	const router = useNavigate();
	const form = useForm<TypeForgotPasswordSchema>({
		resolver: zodResolver(AuthSchema.FORGOTPASSWORD_SCHEMA),
		defaultValues: {
			email: '',
		},
	});

	const { handleSubmit, reset } = form;

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.forgot_password.index(),
		mutationFn: (req: ForgotPasswordRequest) => forgotPasswordService.sendOtp(req),
	});

	const handleForm = handleSubmit((value) => {
		mutate(value, {
			onSuccess: (data) => {
				customToastSuccess(data.message);

				reset();
				handleSetEmailSubmitted(true, value.email);
				router('/auth/forgot-password/verify-otp');
			},

			onError: (err: unknown) => {
				const errorMessage = errorHandler(err);

				customToastError(errorMessage);
			},
		});
	});

	return (
		<ContainerAuth title="Lupa Kata Sandi" message="Masukan alamat email yang terkait dengan Akun anda untuk menerima tautan reset">
			<ForgotPasswordForm formMethods={form} handleForm={handleForm} isPending={isPending} />
		</ContainerAuth>
	);
};

export default ForgotPasswordAuthPage;
