import { InputOtp } from '@heroui/input-otp';
import { useState } from 'react';
import { ContainerAuth } from '../components/AuthContainer';
import { CustomButton } from '../components/CustomButton';
import { Button } from '@heroui/react';

const VerifyOtpAuthPage = () => {
	const [value, setValue] = useState('');
	return (
		<ContainerAuth title="Verifikasi Kode OTP Anda" message="Masukan kode 6 digit yang baru saja kami kirimkan ke alamat email Anda">
			<div className="flex flex-col items-center justify-center gap-6">
				<InputOtp size="lg" length={6} value={value} onValueChange={setValue} />
				<div className='flex flex-col items-center w-full'>
					<CustomButton type="submit">Verify</CustomButton>
					<Button size="md" variant="light">
						Resend OTP
					</Button>
				</div>
			</div>
		</ContainerAuth>
	);
};

export default VerifyOtpAuthPage;
