import { BiChevronDown, BiChevronUp, BiDetail } from 'react-icons/bi'

import { Data } from '@/types/types'

import styles from './Accordion.module.css'

interface AccordionHeaderProps {
  active: boolean
  index: number
  onClick: (groupIndex: number) => void
}
const ALL_CHECKED = false //TODO
function AccordionHeader({ active, index, onClick }: AccordionHeaderProps) {
  return (
    <div className={styles.accordionTitle} onClick={onClick}>
      <div className="left">
        <div className={`${styles.icon} ${ALL_CHECKED ? styles.iconActive : ''}`}>
          <BiDetail />
          <span>Group {`${index}`}</span>
        </div>
      </div>
      <div className={styles.handler}>
        {!active ? (
          <>
            <p>Show</p>
            <BiChevronDown />
          </>
        ) : (
          <>
            <p>Hide</p>
            <BiChevronUp />
          </>
        )}
      </div>
    </div>
  )
}
interface AccordionProps {
  data: Data[]
  activeIndex: number
  handleTask: (groupIndex: number, taskIndex: number) => void
  changeActive: (groupIndex: number) => void
}

function Accordion({ data, activeIndex, handleTask, changeActive }: AccordionProps) {
  if (!data.length) {
    return null
  }

  return (
    <div className={styles.accordion}>
      {data.map((ar, index) => {
        const isActive = index === activeIndex
        return (
          <div className={styles.accordionGroup} key={index}>
            <AccordionHeader active={isActive} index={index} onClick={() => changeActive(index)} />

            {isActive ? (
              <div className={styles.accordionContent}>
                {ar.tasks.map((inner, idx) => (
                  <div className={styles.innerDescription} key={inner.description}>
                    <input
                      type="checkbox"
                      onChange={() => handleTask(index, idx)}
                      checked={inner.checked}
                      name={inner.description}
                      id={inner.description}
                      className={styles.input}
                    />
                    <label>{inner.description}</label>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
