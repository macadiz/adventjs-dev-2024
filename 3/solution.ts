type Inventory = Array<
  { name: string, quantity: number, category: string }
>

export function organizeInventory(inventory: Inventory): object {
  return inventory.reduce((acc, { category, name, quantity }) => ({
    ...acc,
    [category]: {
      ...acc[category],
      [name]: (acc[category]?.[name] ?? 0) + quantity,
    },
  }), {} as Record<string, Record<string, number>>);
}