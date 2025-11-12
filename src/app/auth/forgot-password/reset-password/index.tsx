import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { forgotPasswordService } from '@/lib/services/auth/forgotPassword.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthSchema, type TypeResetPassword } from '../../../../lib/validation/auth.validation';
import { ContainerAuth } from '../../components/AuthContainer';
import { useGetToken } from '../../hooks/useGetToken';
import { ResetPasswordForm } from './components/ResetPasswordForm';
import type { ResetPasswordForgotPasswordRequest } from '@/types/auth/forgot-password.types';

const ResetPasswordAuthPage = () => {
	const route = useNavigate();
	const token = useGetToken();

	const form = useForm<TypeResetPassword>({
		resolver: zodResolver(AuthSchema.RESETPASSWORD),
		defaultValues: {
			password: '',
			confirm_password: '',
		},
	});
	const { handleSubmit, reset } = form;

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.forgot_password.reset_password(),
		mutationFn: (req: ResetPasswordForgotPasswordRequest) => forgotPasswordService.reset(req),
	});

	const handleForm = handleSubmit((value) => {
		const data = {
			token: token ?? '',
			password: value.password,
			confirm_password: value.confirm_password,
		};

		mutate(data, {
			onSuccess: (data) => {
				customToastSuccess(data.message);
				reset();

				route('/auth/signin');
			},

			onError: (err) => {
				const errorMessage = errorHandler(err);

				customToastError(errorMessage);
			},
		});
	});

	return (
		<ContainerAuth title="Reset🗝️ , Kata Sandi!" message="Identitas Anda telah diverifikasi! Tetapkan kata sandi baru Anda">
			<ResetPasswordForm formMethods={form} handleForm={handleForm} isPending={isPending} />
		</ContainerAuth>
	);
};

export default ResetPasswordAuthPage;
