import { customToastSuccess } from "@/components/custom-toast";
import { Button } from "@/components/ui/button";
import { useSessionStore } from "@/lib/stores";
import { useNavigate } from "react-router";

export const LogoutProfile = () => {
	const {resetSessionUser} = useSessionStore()
	const router = useNavigate()

	const handleLogout = () => {
		resetSessionUser()
		sessionStorage.removeItem("session-user")
		customToastSuccess("Anda telah keluar")
		router("/auth/signin")
	}

	return (
		<Button onClick={handleLogout} variant={'ghost'} className="size-14">
			<img src="/images/icons/logout-red.svg" alt="Logout" className="size-full" />
		</Button>
	);
};
