import { useEffect, useState } from 'react'

import axios from 'axios'

import { Data, JsonData } from '@/types/types'

export default function useFetch(url: string) {
  const [data, setData] = useState<Data[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get<JsonData>(url)
        setData(data.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchTasks()
  }, [url])

  return { data, error, loading }
}
