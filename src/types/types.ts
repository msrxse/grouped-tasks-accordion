interface Checks {
  description: string
  value: number
  checked: boolean
}
interface Data {
  name: string
  tasks: Checks[]
}

export type { Checks, Data }
