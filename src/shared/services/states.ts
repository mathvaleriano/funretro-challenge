export const getStates = async () => {
  const res = await fetch('/api/states')
  const data = (await res.json()) as string[]
  return data
}
