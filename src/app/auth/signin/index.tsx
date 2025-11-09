import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers/error-handler.helper';
import { authKeys } from '@/lib/queries/auth';
import { useSessionStore } from '@/lib/stores/useSessionStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthSchema, type TypeSigninSchema } from '../../../lib/validation/auth.validation';
import { ContainerAuth } from '../components/AuthContainer';
import { SigninForm } from './components/form/SigninForm';
import { authService } from '@/lib/services/auth/auth.service';
import type { SigninAuthRequest } from '@/types/auth/auth.types';

const SigninAuthPage = () => {
	const router = useNavigate();
	const handleSetSession = useSessionStore((state) => state.setSessionUser)

	const form = useForm<TypeSigninSchema>({
		resolver: zodResolver(AuthSchema.SIGNINSCHEMA),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { handleSubmit } = form;

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.signin(),
		mutationFn: (req: SigninAuthRequest) => authService.signin(req),
	});

	const handleForm = handleSubmit((value: SigninAuthRequest) => {

		mutate(value, {
			onSuccess: (data) => {
				customToastSuccess(data.message)

				handleSetSession(data.data)
				router("/dashboard")
			},

			onError: (err: unknown) => {
				const errorMessage = errorHandler(err);

				customToastError(errorMessage);
			},
		});
	});

	return (
		<ContainerAuth title="Halo🙌🏻 , Selamat Datang!" message="Silahkan masuk untuk melanjutkan">
			<SigninForm formMethods={form} handleForm={handleForm} isPending={isPending} />
		</ContainerAuth>
	);
};

export default SigninAuthPage;
