import { ContainerAuth } from '@/app/auth/components/AuthContainer';

export const VerifyOtpSuccessPage = () => {
	return (
		<ContainerAuth title="Tautan Reset Password Telah Terkirim" message="Kami telah mengirimkan tautan reset password akun ke alamat email Anda.">
			<div></div>
		</ContainerAuth>
	);
};
