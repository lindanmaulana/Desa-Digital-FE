import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { resendOtpService } from '@/lib/services';
import type { ResendOtpRequest } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useCountDownTimer } from '../hooks/useCountDownTimer';
import { useGetVerifyToken } from '../../hooks/useGetVerifyToken';

export const ResendOtp = () => {
	const token = useGetVerifyToken();
	const { play, timer, handleSetCountDown } = useCountDownTimer();

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.resend_otp(),
		mutationFn: (req: ResendOtpRequest) => resendOtpService(req),
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

	const isDisabled = play || isPending;

	return (
		<Button type="button" onClick={handleResendOtp} variant={'link'} size={'sm'} disabled={play || isPending} className={`relative text-sm cursor-pointer text-village-dark-green `}>
			{isPending && <Spinner />}

			{!isDisabled && <span className={`${play && 'opacity-30'}`}>Resend OTP</span>}

			{play && <span className="absolute inset-0 flex items-center justify-center">Kode baru dapat diminta dalam {timer}</span>}
		</Button>
	);
};
