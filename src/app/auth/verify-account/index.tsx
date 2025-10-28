import { ContainerAuth } from '../components/AuthContainer';
import { VerifyAccount } from './components/VerifyAccount';

const VerifyAccountAuthPage = () => {
	return (
		<ContainerAuth title="Verifikasi Kode OTP Anda" message="Masukan kode 6 digit yang baru saja kami kirimkan ke alamat email Anda">
			<VerifyAccount />
		</ContainerAuth>
	);
};

export default VerifyAccountAuthPage;
