import { useSessionStore } from "@/lib/stores"
import type { Session } from "@/types/auth/auth.types"

export const useSession = (): Session | null => {
  const session = useSessionStore((state) => state.session)

  return session
}
