const all = ["head-of-family"] as const

export const headOfFamilyKeys = {
  create: () => [...all, "create"],
  
  lists: () => [...all, "list"],
  list: (params: string) => [...all, "list", {params}],
}
