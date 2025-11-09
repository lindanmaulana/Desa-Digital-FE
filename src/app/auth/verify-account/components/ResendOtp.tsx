import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { verifyAccountService } from '@/lib/services/auth/verify-account.service';
import type { ResendOtpVerifyAccountRequest } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { ButtonResendOtp } from '../../components/ButtonResendOtp';
import { useCountDownTimer } from '../../hooks/useCountDownTimer';
import { useGetToken } from '../../hooks/useGetToken';

export const ResendOtp = () => {
	const token = useGetToken();
	const { play, timer, handleSetCountDown } = useCountDownTimer();

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.resend_otp(),
		mutationFn: (req: ResendOtpVerifyAccountRequest) => verifyAccountService.resendOtp(req),
	});

	const handleResendOtp = () => {
		const datatoken = {
			token: token ?? '',
		};

		mutate(datatoken, {
			onSuccess: (data) => {
				customToastSuccess(data.message);
				handleSetCountDown(data.data.otp_expiry_seconds);
			},

			onError: (err: unknown) => {
				const errorMessage = errorHandler(err);

				customToastError(errorMessage);
			},
		});
	};

	return <ButtonResendOtp handleResendOtp={handleResendOtp} isPending={isPending} play={play} timer={timer} />;
};
