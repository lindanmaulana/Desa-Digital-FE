import { useState, type ReactNode } from "react";
import { AuthContext, type StateContext } from "./AuthContext.type";

interface AuthContextProviderProps {
	children: ReactNode
}

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
	const [authState, setAuthState] = useState<StateContext>({
		emailSubmitted: false,
		otpVerified: false,
		useEmail: ""
	})

	const handleEmailSubmitted = (val: boolean) => {
		setAuthState({...authState, emailSubmitted: val})
	}

	const handleOtpVerified = (val: boolean) => {
		setAuthState({...authState, otpVerified: val})
	}

	return (
		<AuthContext.Provider value={{...authState, handleEmailSubmitted, handleOtpVerified}}>
			{children}
		</AuthContext.Provider>
	)
};
