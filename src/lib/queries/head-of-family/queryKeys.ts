const all = ["head-of-family"] as const

export const headOfFamilyKeys = {
  lists: () => [...all, "list"],
  list: (params: string) => [...all, "list", {params}]
}
