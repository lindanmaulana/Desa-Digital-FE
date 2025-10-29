import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { resendOtpService } from '@/lib/services';
import type { ResendOtpRequest } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useGetUsermail } from '../../hooks/useGetUserMail';
import { useCountDownTimer } from '../hooks/useCountDownTimer';

export const ResendOtp = () => {
	const email = useGetUsermail();
	const {play, timer, handleSetCountDown} = useCountDownTimer()

	const { mutate, isPending } = useMutation({
		mutationKey: authKeys.resend_otp(),
		mutationFn: (req: ResendOtpRequest) => resendOtpService(req),
	});

	const handleResendOtp = () => {
		const dataEmail = {
			email: email ?? '',
		};

		mutate(dataEmail, {
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

	return (
		<Button type="button" onClick={handleResendOtp} variant={'link'} size={'sm'} disabled={play} className={`relative text-sm cursor-pointer text-village-dark-green `}>
			{isPending ? <Spinner /> : <span className={`${play && "opacity-30"}`}>Resend OTP</span>}

			{play && <span className="absolute inset-0 flex items-center justify-center">Kode baru dapat diminta dalam {timer}</span>}
		</Button>
	);
};
