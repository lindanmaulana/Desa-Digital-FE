import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useCountDown } from '@/hooks/useCountDown';
import { errorHandler } from '@/lib/helpers';
import { authKeys } from '@/lib/queries/auth';
import { resendOtpService } from '@/lib/services';
import type { ResendOtpRequest } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useGetUsermail } from '../../hooks/useGetUserMail';
import { useState } from 'react';

export const ResendOtp = () => {
	const [startTimer, setStartTimer] = useState<boolean>(false)
	const [endTimer, setEndTimer] = useState<boolean>(false)

	const email = useGetUsermail();
	const timer = useCountDown({time: 15, start: startTimer, end: endTimer})

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
				setStartTimer(true)
			},

			onError: (err: unknown) => {
				const errorMessage = errorHandler(err);

				customToastError(errorMessage);
			},
		});
	};

	return (
		<Button type="button" onClick={handleResendOtp} variant={'link'} size={'sm'} className="text-sm cursor-pointer text-village-dark-green">
			{isPending ? <Spinner /> : 'Resend OTP'}
			{(!isPending && timer !== 15) && timer}
		</Button>
	);
};
