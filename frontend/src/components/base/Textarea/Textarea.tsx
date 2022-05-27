import classes from './Textarea.module.sass'
import React, {FC, useState} from 'react'
import {ITextareaProps} from './TextareaTypes'



const Textarea: FC<ITextareaProps> = (props: ITextareaProps) => {

  const [value, setValue] = useState<string>('')
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <textarea value={value} onChange={changeHandler} {...props} className={[props.className, classes.Textarea].join(' ')}/>
    </>
  )
}

export default Textarea
