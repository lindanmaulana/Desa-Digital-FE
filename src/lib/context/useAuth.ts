import { useContext } from "react"
import { AuthContext } from "./AuthContext.type"

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error("iseAuth must be used within an AuthProvider")

  return context
}
