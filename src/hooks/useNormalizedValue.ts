import { useReducer } from 'react'

import { Data } from '@/types/types'

type Action = { type: 'init'; payload: Data[] } | { type: 'get'; payload: Data[] }
type State = { totalNormalizedValue: number; displayedNormalizedValue: number }
const getSumNormalizedValues = (data: Data[]) =>
  data.reduce((acc, each) => acc + each.tasks.reduce((taskAcc, task) => taskAcc + task.value, 0), 0)
const getSumCheckedNormalizedValues = (data: Data[]) =>
  data.reduce(
    (acc, group) =>
      acc +
      group.tasks.reduce((taskAcc, task) => (task.checked ? taskAcc + task.value : taskAcc), 0),
    0,
  )

function normalizedValueReducer(state: State, action: Action) {
  switch (action.type) {
    case 'init': {
      const sumNormalizedValues = getSumNormalizedValues(action.payload)
      const progress = (getSumCheckedNormalizedValues(action.payload) * 100) / sumNormalizedValues

      return {
        totalNormalizedValue: sumNormalizedValues,
        displayedNormalizedValue: Math.round(progress * 100) / 100,
      }
    }
    case 'get': {
      const sumNormalizedValues = getSumNormalizedValues(action.payload)
      const progress = (getSumCheckedNormalizedValues(action.payload) * 100) / sumNormalizedValues

      return {
        totalNormalizedValue: sumNormalizedValues,
        displayedNormalizedValue: Math.round(progress * 100) / 100,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useNormalizedValue() {
  const [state, dispatch] = useReducer(normalizedValueReducer, {
    totalNormalizedValue: 0,
    displayedNormalizedValue: 0,
  })
  // NOTE: you *might* need to memoize this value
  const value = { state, dispatch }
  return value
}

export default useNormalizedValue
