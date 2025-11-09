import type { UserRole } from "@/types/users/user.types";

export const displayRoleHandler = (role?: UserRole): string => {
  let userRole = "Unknown"

  console.log({role})

  switch(role) {
    case "ADMIN":
      userRole = "Kepala Desa"
      break
    case "STAFF":
      userRole = "Staff Desa"
      break
    case "HEAD_OF_FAMILY":
      userRole = "Kepala Keluarga"
      break
    default:
      userRole = "Anggota Keluarga"
  }

  return userRole
}

