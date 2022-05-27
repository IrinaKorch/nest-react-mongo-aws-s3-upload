import React, {FC, useState} from 'react'
import { IDateInputProps } from './DateInputTypes'
import moment from 'moment'
import classes from './DateInput.module.sass'

const today: string = moment(new Date()).format('YYYY-MM-DD')

const DateInput: FC<IDateInputProps> = (props: IDateInputProps) => {
  const [value, setValue] = useState<string>(today)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input type="date" value={value} onChange={changeHandler} {...props} className={[props.className, classes.DateInput].join(' ')}/>
    </>
  )
}

export default DateInput
