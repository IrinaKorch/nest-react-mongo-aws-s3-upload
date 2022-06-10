import React, {FC} from 'react'
import { IDateInputProps } from './DateInputTypes'
import classes from './DateInput.module.sass'

const DateInput: FC<IDateInputProps> = (props: IDateInputProps) => {

  return (
    <>
      <input type="date" {...props} {...props.register} className={[props.className, classes.DateInput].join(' ')}/>
    </>
  )
}

export default DateInput
