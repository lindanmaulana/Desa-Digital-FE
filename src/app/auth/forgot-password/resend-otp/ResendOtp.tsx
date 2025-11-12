import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { useGuardAuth } from '@/hooks';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { forgotPasswordService } from '@/lib/services/auth/forgotPassword.service';
import { useMutation } from '@tanstack/react-query';
import { ButtonResendOtp } from '../../components/ButtonResendOtp';
import { useCountDownTimer } from '../../hooks/useCountDownTimer';
import type { ForgotPasswordRequest } from '@/types/auth/forgot-password.types';

export const ResendOtpForgotPassword = () => {
	const { email } = useGuardAuth();
	const { play, timer, handleSetCountDown } = useCountDownTimer();

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.forgot_password.resend.otp(),
		mutationFn: (req: ForgotPasswordRequest) => forgotPasswordService.resendOtp(req),
	});

	const handleForm = () => {
		const data = { email: email ?? '' };

		mutate(data, {
			onSuccess: (data) => {
				customToastSuccess(data.message);
				handleSetCountDown(data.data.otp_expiry_seconds ?? 1);
			},

			onError: (err) => {
				const errorMessage = errorHandler(err);

				customToastError(errorMessage);
			},
		});
	};

	return <ButtonResendOtp handleResendOtp={handleForm} isPending={isPending} play={play} timer={timer} />;
};
