const all = ["profile"] as const

export const profileKeys = {
  detail: () => [...all, "detail"]
}
