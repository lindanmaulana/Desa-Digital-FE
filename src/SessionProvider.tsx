import type { ReactNode } from "react"
import { useSessionStore } from "./lib/stores/useSessionStore"

interface SessionProviderProps {
	children: ReactNode
}

export const SessionProvider = ({children}: SessionProviderProps) => {
	const session = useSessionStore((state) => state.session)

	

	return children
}
