import { useEffect, useState } from 'react'

import Accordion from '@/components/Accordion/Accordion'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import useFetch from '@/hooks/useFetch'
import useNormalizedValue from '@/hooks/useNormalizedValue'
import { Data } from '@/types/types'

import styles from './App.module.css'

const API_URL =
  'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress'

export const App = () => {
  const { data, loading, error } = useFetch(API_URL)
  const {
    state: { displayedNormalizedValue },
    dispatch,
  } = useNormalizedValue()
  const [tasks, setTasks] = useState<Data[]>([])
  const [active, setActive] = useState<number>(-1)

  useEffect(() => {
    if (data.length && !error) {
      // save the data to own state
      setTasks(data)
      // calculate normalized value
      dispatch({
        type: 'init',
        payload: data,
      })
    }
  }, [data, dispatch, error])

  const toggleActive = (act: number) => {
    if (active === act) {
      return setActive(-1)
    }

    return setActive(act)
  }

  const handleTask = (groupIndex: number, taskIndex: number) => {
    const updatedTasks = [...tasks]
    updatedTasks[groupIndex].tasks[taskIndex].checked =
      !updatedTasks[groupIndex].tasks[taskIndex].checked
    setTasks(updatedTasks)
    // also dispatch to save the new normalized values
    dispatch({
      type: 'get',
      payload: updatedTasks,
    })
  }

  if (error) {
    return <p>An error has ocurred</p>
  }

  return (
    <div data-testid="app-id" className={styles.main}>
      {loading && <p>Loading...</p>}
      {tasks && (
        <div className={styles.container}>
          <p>lodgify grouped tasks</p>
          <ProgressBar progress={displayedNormalizedValue} />
          <Accordion
            data={tasks}
            activeIndex={active}
            handleTask={handleTask}
            changeActive={toggleActive}
          />
        </div>
      )}
    </div>
  )
}

export default App
