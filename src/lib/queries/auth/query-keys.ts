const all = ["auth"] as const

export const authKeys = {
  signin: () => [...all, "signin"],
}
