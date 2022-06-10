import classes from './Textarea.module.sass'
import React, {FC} from 'react'
import {ITextareaProps} from './TextareaTypes'



const Textarea: FC<ITextareaProps> = (props: ITextareaProps) => {

  return (
    <>
      <textarea {...props} {...props.register} className={[props.className, classes.Textarea].join(' ')}/>
    </>
  )
}

export default Textarea
