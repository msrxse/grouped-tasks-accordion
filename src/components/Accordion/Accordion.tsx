import { BiChevronDown, BiChevronUp, BiDetail } from 'react-icons/bi'

import { Data } from '@/types/types'

import styles from './Accordion.module.css'

interface AccordionHeaderProps {
  active: boolean
  isAllChecked: boolean
  index: number
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

function AccordionHeader({ active, isAllChecked, index, onClick }: AccordionHeaderProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // if Space or Enter keys triggered!
    if (event.code == 'Space' || event.code == 'Enter') {
      // Trigger the button click
      document.getElementById(`accordion-${index}-id`)?.click()
    }
  }

  return (
    <div
      tabIndex={index}
      aria-expanded={active}
      aria-controls={`section-${index}`}
      id={`accordion-${index}-id`}
      role="button"
      className={styles.accordionTitle}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div className="left">
        <div className={`${styles.icon} ${isAllChecked ? styles.iconActive : ''}`}>
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
        const isAllChecked = data[index]?.tasks?.every((task) => task.checked)

        return (
          <div className={styles.accordionGroup} key={index}>
            <AccordionHeader
              active={isActive}
              isAllChecked={isAllChecked}
              index={index}
              onClick={() => changeActive(index)}
            />

            {isActive ? (
              <div
                id={`section-${index}`}
                aria-labelledby={`accordion-${index}-id`}
                className={styles.accordionContent}
              >
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
