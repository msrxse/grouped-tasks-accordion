interface Checks {
  description: string
  value: number
  checked: boolean
}
interface Data {
  name: string
  tasks: Checks[]
}
interface JsonData {
  data: Data[]
}

export type { Checks, JsonData, Data }
