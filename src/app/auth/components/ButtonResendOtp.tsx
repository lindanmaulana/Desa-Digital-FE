import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import type { Noop } from "react-hook-form"

interface ButtonResendOtpProps {
	isPending: boolean
	play: boolean
	handleResendOtp: Noop
	timer: number
}

export const ButtonResendOtp = ({handleResendOtp, isPending, play, timer}: ButtonResendOtpProps) => {
	const isDisabled = isPending || play

	return (
		<Button type="button" onClick={handleResendOtp} variant={'link'} size={'sm'} disabled={isDisabled} className={`relative text-sm cursor-pointer text-village-dark-green `}>
			{isPending && <Spinner />}

			{!isDisabled && <span className={`${play && 'opacity-30'}`}>Resend OTP</span>}

			{play && <span className="absolute inset-0 flex items-center justify-center">Kode baru dapat diminta dalam {timer}</span>}
		</Button>
	)
}
